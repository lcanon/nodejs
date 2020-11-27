import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import * as d3 from 'd3';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  @Input() goal;
  private data = [];

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const ahorrado = this.goal.total === this.goal.actual ? 0 : this.goal.total - this.goal.actual;
    const current = this.goal.actual;
    this.value = this.goal.actual * 100 / this.goal.total;
  }

  

  /*showAddTips() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(NewTipsComponent, dialogConfig);
  }*/
}
