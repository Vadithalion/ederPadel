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
    Surname: new FormControl,
    Tel: new FormControl,
    Email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),

  });

  constructor(){

  }

  public setRegisterForm() {
    alert('porque tocas?');
  }

}
