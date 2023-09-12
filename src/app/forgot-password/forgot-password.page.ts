import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ForgotPasswordPage implements OnInit {

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

  resetPassword() {
    this.createToast("", "Correo enviado.", "top", 5000);
    this.router.navigate(["/"])
  }

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

}
