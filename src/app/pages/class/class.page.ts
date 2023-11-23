import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  nombreRamo: string = ''; // Inicialización en el constructor
  listaAsistencia: { fecha: string; asistente: boolean }[] = []; // Inicialización en el constructor

  constructor(private router: Router, private alertController: AlertController, public toastController: ToastController) { }

  goToPage(page: string) {
    // Navega a la página deseada al hacer clic sin recargar la página
    this.router.navigate([page]);
  }

  async isGoogleBarcodeScannerModuleAvailable(): Promise<boolean> {
    const result = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    return result.available;
  }
  
  async installGoogleBarcodeScannerModule(): Promise<void> {
    return new Promise<void>((resolve) => {
      const progressListener = (progress: any) => {
        console.log("Installation Progress:", progress);
        if (progress.status === 'completed') {
          BarcodeScanner.removeAllListeners();
          resolve();
        }
      };
  
      BarcodeScanner.addListener('googleBarcodeScannerModuleInstallProgress', progressListener);
  
      BarcodeScanner.installGoogleBarcodeScannerModule();
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    const lastScannedBarcode = barcodes[barcodes.length - 1];

    if (lastScannedBarcode.displayValue === "TokenSecreto") {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

      let asistencia = { fecha: formattedDate, asistente: true };

      if (this.listaAsistencia.some(entry => entry.fecha === asistencia.fecha && entry.asistente)) {
        this.createToast("Asistencia ya registrada.", "La asistencia de la fecha: " + formattedDate + " ya se encuentra registrada.", "top", 3000);
      } else {
        this.createToast("Asistencia Registrada.", "Fecha: " + formattedDate + " registrada.", "top", 3000);
        this.listaAsistencia.push(asistencia);
      }
      
      this.listaAsistencia.push();
    }
  }

  createToast(title: string, msg: string, pos: any, dur: number) {
    this.toastController.create({
      header: title,
      message: msg,
      position: pos,
      duration: dur,
      cssClass: "custom-toast"
    }).then((toast) => {
      toast.present();
    });
  }


  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    console.log('Camera Permission Status:', camera);
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }


  async ngOnInit() {
    
    try {
      const isModuleAvailable = await this.isGoogleBarcodeScannerModuleAvailable();
      console.log("Is Module Available:", isModuleAvailable);
  
      if (!isModuleAvailable) {
        console.log("Module not available. Installing.");
        await this.installGoogleBarcodeScannerModule();
        console.log("Module installation complete.");
      }
  
      // Continue with other initialization logic
    } catch (error) {
      console.error("Error in ngOnInit:", error);
    }

    this.nombreRamo = 'Matemáticas';
    this.listaAsistencia = [
      { fecha: '2023-09-10', asistente: true },
      { fecha: '2023-09-12', asistente: false },
      { fecha: '2023-09-15', asistente: true },
      // Agrega más datos de asistencia según sea necesario
    ];

    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

}
