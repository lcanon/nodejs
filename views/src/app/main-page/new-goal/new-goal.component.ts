import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { TargetService } from 'src/app/services/target.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
  name;
  price;
  loadGoals;
  constructor(
    private goalService: TargetService,
    private userService: UserService,
    private dialogRef: MatDialogRef<NewGoalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.loadGoals = data.loadGoals;
  }

  ngOnInit(): void {
    
  }

  newGoal() {
    this.goalService.addGoals(this.userService.get(), this.name, this.price)
      .subscribe(data => {
        console.log(data);
        this.loadGoals = true;
        this.dialogRef.close(this.loadGoals);
      });
      
  }

  close() {
    this.dialogRef.close();
  }
}
