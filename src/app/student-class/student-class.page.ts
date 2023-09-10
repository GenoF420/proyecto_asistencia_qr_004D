import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.page.html',
  styleUrls: ['./student-class.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StudentClassPage implements OnInit {

  nombreRamo: string = ''; // Inicialización en el constructor
  listaAsistencia: { fecha: string; asistente: boolean }[] = []; // Inicialización en el constructor

  goToPage(page: string) {
    this.router.navigate([page])
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.nombreRamo = 'Matemáticas';
    this.listaAsistencia = [
      { fecha: '2023-09-10', asistente: true },
      { fecha: '2023-09-12', asistente: false },
      { fecha: '2023-09-15', asistente: true },
      // Agrega más datos de asistencia según sea necesario
    ];
  }

}
