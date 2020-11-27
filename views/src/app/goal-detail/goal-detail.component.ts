import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TargetService } from '../services/target.service';
import { UserService } from '../services/user.service';
import { AddTipsComponent } from './add-tips/add-tips.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss']
})
export class GoalDetailComponent implements OnInit {

  goal;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private goalService: TargetService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.goalService.getGoal(this.userService.get(), params['id'])
        .subscribe(data => this.goal = data);
    });
  }

  showSaveMoney() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      goalId: this.goal.id
    };

    const dialogRef = this.dialog.open(AddTipsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        this.route.params.subscribe(params => {
          this.goalService.getGoal(this.userService.get(), params['id'])
            .subscribe(data => this.goal = data);
        });
      }
    ); 
  }

  canAdd() {
    return this.goal.actual < this.goal.total;
  }
}
