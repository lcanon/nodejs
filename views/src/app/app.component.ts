import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FronDev2Ops';
  isUser;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
    if(userService.get()) {
      this.isUser = true;
    } else {
      this.isUser = false;
    }
  }

  logout() {
    window.localStorage.removeItem('idUser');
    this.router.navigate([''])
  }
}
