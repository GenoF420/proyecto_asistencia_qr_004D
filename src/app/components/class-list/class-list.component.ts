import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  classes: any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.myClasses().subscribe({
      next: (data) => {
        this.classes = data['data'];
        console.log(this.classes);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
