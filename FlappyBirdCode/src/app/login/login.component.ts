import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { RegisterDTO } from '../models/ResgisterDTO';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const domain = "http://localhost:5266/api/User/"
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  hide = true;

  registerUsername : string = "";
  registerEmail : string = "";
  registerPassword : string = "";
  registerPasswordConfirm : string = "";

  loginUsername : string = "";
  loginPassword : string = "";

  constructor(public route : Router, public http : HttpClient) { }

  ngOnInit() {
  }

  login(){


    // Redirection si la connexion a réussi :
    this.route.navigate(["/play"]);
  }

 async register(): Promise<void> {
  let registerDTO = new RegisterDTO(
    this.registerUsername,
    this.registerEmail,
    this.registerPassword,
    this.registerPasswordConfirm
  );
    let x = await lastValueFrom(this.http.post<RegisterDTO>(domain + "Register", registerDTO))
    console.log(x)
  } 
  
  
}