import { Target } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TargetService } from 'src/app/services/target.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.scss']
})
export class AddTipsComponent implements OnInit {

  amount;
  data;

  constructor(
    private goalService: TargetService,
    private userService: UserService,
    private dialogRef: MatDialogRef<AddTipsComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { 
      this.data = data;
    }

  ngOnInit(): void {
  }

  newTrips() {
    this.goalService.addTips(this.userService.get(), this.data.goalId, this.amount)
      .subscribe(data => {
        this.dialogRef.close(true);
      });
  }

  close() {
    this.dialogRef.close();
  }
}
