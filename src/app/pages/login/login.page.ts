import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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

    

    if (this.api.login(username,password)) {
      console.log("Es valido")
      // La cuenta es válida, puedes redirigir al usuario según el tipo de cuenta (account.type)
    }else{
      console.log("no es valida :C");
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
