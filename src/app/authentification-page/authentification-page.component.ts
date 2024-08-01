import { fileURLToPath } from 'node:url';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification-page',
  templateUrl: './authentification-page.component.html',
  styleUrls: ['./authentification-page.component.css']
})
export class AuthentificationPageComponent {
  username: string = '';  
  password: string = '';  
  usernameLabel: string = "Email";
  passwordLabel: string = 'Mot de passe';
  isUserEmpty: boolean = false;
  isPasswordEmpty: boolean = false;
  


  isEmpty() {
    if (!this.username) {
      this.usernameLabel = "Veuillez entrer votre Email";
      this.isUserEmpty = true ;

    } else {
      this.usernameLabel = "Email";
      this.isUserEmpty = false ;

    }

    if (!this.password) {
      this.passwordLabel = 'Veuillez entrer le mot de passe';
      this.isPasswordEmpty = true ;
    } else {
      this.passwordLabel = 'Mot de passe';
      this.isPasswordEmpty = false ;
    }
  }
}
