import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdviceService } from '../services/advice.service';
import { TargetService } from '../services/target.service';
import { UserService } from '../services/user.service';
import { NewGoalComponent } from './new-goal/new-goal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnChanges {

  goals;
  advice;
  loadGoals = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private goalService: TargetService,
    private adviceService: AdviceService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.goalService.getGoals(this.userService.get())
      .subscribe(data => this.goals = data);

    this.adviceService.getAdvice()
      .subscribe(data => this.advice = data);

    if(!this.userService.get()) {
      this.router.navigate(['']);
    }
  }

  ngOnChanges() {
    if(this.loadGoals) {
      this.loadGoals = false;
      this.goalService.getGoals(this.userService.get())
        .subscribe(data => this.goals = data);
    }
  }

  showNewGoal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      loadGoals: this.loadGoals
    };

    const dialogRef = this.dialog.open(NewGoalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        this.loadGoals = data;
        this.goalService.getGoals(this.userService.get())
        .subscribe(data => this.goals = data);
      }
    );   
  }

}