import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    // Lógica de logout
    this.api.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}