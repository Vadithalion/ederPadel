import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  public registerForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    surname: new FormControl,
    tel: new FormControl,
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),

  });

  constructor(){

  }

  public setRegisterForm() {
    // iñi - el alert te devuelve lo que hayas puesto en el cuadro del nombre
    alert(this.registerForm.get('name')?.value)
  }
}
