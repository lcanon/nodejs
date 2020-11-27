import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-init-screen',
  templateUrl: './init-screen.component.html',
  styleUrls: ['./init-screen.component.scss']
})
export class InitScreenComponent implements OnInit {
  selectedIndex;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if(this.userService.get()) {
      this.router.navigate(['objetivos']);
    }
  }

  selectLogin() {
    this.selectedIndex = 1;
  }
}
