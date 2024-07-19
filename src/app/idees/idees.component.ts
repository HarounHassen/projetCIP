import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idees',
  templateUrl: './idees.component.html',
  styleUrl: './idees.component.css'
})
export class IdeesComponent {


  constructor(private router : Router){

  }

  Ajouter() {
    throw new Error('Method not implemented.');
  }

  consulter(){
    this.router.navigate(['details-idee'])
  }

}
