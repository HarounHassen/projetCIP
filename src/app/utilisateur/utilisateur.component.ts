import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {

  constructor(private router : Router){}

  Ajouter() {
    this.router.navigate(['ajouter-utilisateur']);
  }

  Modifier() {
  throw new Error('Method not implemented.');
  }

  onFileChange(event: any) {
    console.log('File change event triggered');
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      console.error('Cannot use multiple files');
      return;
    }

}
}