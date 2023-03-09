import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'cours-angular';
  // username: string;

  // constructor() {
  //   const user = JSON.parse(localStorage.getItem('user') ?? '');
  //   this.username = user.username;
  // }
}
