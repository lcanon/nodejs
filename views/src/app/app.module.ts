import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { InitScreenComponent } from './init-screen/init-screen.component';
import { RegisterComponent } from './init-screen/register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './init-screen/login/login.component';
import { GoalComponent } from './main-page/goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { NewGoalComponent } from './main-page/new-goal/new-goal.component';
import { AddTipsComponent } from './goal-detail/add-tips/add-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    InitScreenComponent,
    RegisterComponent,
    MainPageComponent,
    LoginComponent,
    GoalComponent,
    GoalDetailComponent,
    NewGoalComponent,
    AddTipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
