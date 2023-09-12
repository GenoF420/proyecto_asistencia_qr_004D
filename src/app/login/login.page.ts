import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  cuentas = [
    { id: 1, username: 'c.abarzua@duocuc.cl', password: '123456', type: "teacher" },
    { id: 2, username: 'g.flores@duocuc.cl', password: '123456', type: "student" }
  ];
  

  constructor(private router: Router, public toastController: ToastController) { }


  login() {
    const usernameInput = document.getElementById('username') as HTMLIonInputElement;
    const passwordInput = document.getElementById('password') as HTMLIonInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

    const account = this.cuentas.find((cuenta) => cuenta.username === username && cuenta.password === password);

    if (account) {
      // La cuenta es válida, puedes redirigir al usuario según el tipo de cuenta (account.type)
      if (account.type === 'teacher') {
        this.router.navigate(["/teacher-classes"])
      } else if (account.type === 'student') {
        this.router.navigate(["/student-classes"])
      }
    } else {
      // La cuenta no es válida, puedes mostrar un mensaje de error al usuario
      this.createToast("", "Credenciales invalidas", "top", 5000);
    }
  }

  goToPage(page: string) {
    this.router.navigate([page])
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

  ngOnInit() {
  }

}
