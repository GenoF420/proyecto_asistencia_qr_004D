import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

  nombreRamo: string = ''; // Inicialización en el constructor
  listaAsistencia: { fecha: string; asistente: boolean }[] = []; // Inicialización en el constructor

  constructor(private router: Router) { }

  goToPage(page: string) {
    // Navega a la página deseada al hacer clic sin recargar la página
    this.router.navigate([page]);
  }

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
