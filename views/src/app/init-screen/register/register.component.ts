import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() changeToLogin = new EventEmitter();

  username;
  password;
  repassword;

  checkoutForm;
  passwordError = '';
  whiteError

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
    /*,
    private formBuilder: FormBuilder*/
  ) { 
/*    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: '',
      repassword: ''
    });*/
  }

  ngOnInit(): void {
  }

  register(username, password, repassword) {
    this.passwordError = '';
    this.whiteError = '';
    if(password === repassword) {
      if(username.trim() !== '' && password.trim() !== ''){
        this.userService.register(username, password)
          .subscribe(data => {
            console.log(data);
            this.changeToLogin.emit();
          });
      } else {
        this.whiteError = 'no puede haber campos es blanco';
      }
    }else {
      this.passwordError = 'debe escribir la misma clave';
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
