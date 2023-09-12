import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-classes',
  templateUrl: './student-classes.page.html',
  styleUrls: ['./student-classes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StudentClassesPage implements OnInit {

  ramos = [
    { id: 1, nombre: 'Matemáticas', profesor: 'Profesor A', url: "/student-class" },
    { id: 2, nombre: 'Historia', profesor: 'Profesor B', url: "/student-class" },
    { id: 3, nombre: 'Ciencias', profesor: 'Profesor C', url: "/student-class" },
    // Agrega más ramos aquí si es necesario
  ];
  

  navigateToClass(classID: number) {
    this.router.navigate(['/student-class'])
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
