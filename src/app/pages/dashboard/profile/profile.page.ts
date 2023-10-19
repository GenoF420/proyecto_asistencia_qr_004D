import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any = {};
  avatarURL: string = "";

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.myself().subscribe({
      next: (data) => {
        this.profile = data['data'];
        console.log(this.profile);
        this.avatarURL = Md5.hashStr(this.profile?.user?.email || '');
      },
      error: (err) => {
        console.log(err);
        return
      },
      complete: () => {
        console.log
      }
    })
  }

}
