import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username !== '' && this.password !== '') {
      this.userService.login(this.username, this.password)
        .subscribe((data: any) => {
          if(data.id) {
            window.localStorage.setItem('idUser', data.id);
            this.router.navigate(['objetivos']);

          } else {
            window.localStorage.removeItem('idUser');
          }
        })
    }
  }
}
