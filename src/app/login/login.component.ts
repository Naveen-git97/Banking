import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform: any;

  login(){
    if(this.loginform.valid){
      console.log("login sucessfull",this.loginform.value)
      alert("login sucessfull")
    }
  }
}
