import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController, private api:ApiService) { }


  login() {
    const usernameInput = document.getElementById('email') as HTMLIonInputElement;
    const passwordInput = document.getElementById('password') as HTMLIonInputElement;

    let username = new String(usernameInput.value);
    let password = new String(passwordInput.value);

    this.api.login(username, password).subscribe({
      next: (resp: boolean) => {
        if (resp) {
          this.router.navigate(["/dashboard"])
        } else {
          this.createToast("", "Hubo un error ingresando a tu cuenta.", "top", 3000);
        }
      },
      error: (error: any) => {
        this.createToast("", "Hubo un error comunicandonos con la API.", "top", 3000);
      }
    });

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

  ngOnInit() {}

}
