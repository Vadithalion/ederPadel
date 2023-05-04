import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(){

  }

  public setLoginForm() {
    // iñi - el alert te devuelve lo que hayas puesto en el cuadro del nombre
    alert(this.loginForm.get('email')?.value)
  }
}
