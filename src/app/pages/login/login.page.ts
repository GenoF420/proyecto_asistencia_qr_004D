import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
    const usernameInput = document.getElementById('username') as HTMLIonInputElement;
    const passwordInput = document.getElementById('password') as HTMLIonInputElement;
  }

}
