import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-ajouter-utilisateur-etape1',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css'],
  animations: [
    trigger('formAnimation', [
      state('form1', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('form2', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('form3', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('form1 => form2', [
        style({ opacity: 0, transform: 'translateX(0%)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition('form2 => form1', [
        style({ opacity: 0, transform: 'translateX(0%)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition('form2 => form3', [
        style({ opacity: 0, transform: 'translateX(0%)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition('form3 => form2', [
        style({ opacity: 0, transform: 'translateX(0%)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})

export class AjouterUtilisateurComponent {
  showForm1 = true;
  showForm2 = false;
  showForm3 = false;
  progressWidth = '33.33%';

  nameLabel = 'Nom';
  nameEmpty = false;
  name = '';

  prenomLabel = 'Prénom';
  prenomEmpty = false;
  prenom = '';

  telephoneLabel = 'Téléphone';
  telephoneEmpty = false;
  telephone = '';

  matriculeLabel = 'Matricule';
  matriculeEmpty = false;
  matricule = '';

  emailLabel = 'Email';
  emailEmpty = false;
  email = '';

  selectedRole : string = '';

  onRoleChange(event : any ){
    this.selectedRole = event.target.value ;
  }

  isEmpty() {
    if (!this.name) {
      this.nameLabel = 'Veuillez entrer votre nom';
      this.nameEmpty = true;
    } else {
      this.nameLabel = 'Nom';
      this.nameEmpty = false;
    }

    if (!this.prenom) {
      this.prenomLabel = 'Veuillez entrer votre prénom';
      this.prenomEmpty = true;
    } else {
      this.prenomLabel = 'Prénom';
      this.prenomEmpty = false;
    }

    if (!this.telephone) {
      this.telephoneLabel = 'Veuillez entrer votre téléphone';
      this.telephoneEmpty = true;
    } else {
      this.telephoneLabel = 'Téléphone';
      this.telephoneEmpty = false;
    }

    if (!this.matricule) {
      this.matriculeLabel = 'Veuillez entrer votre matricule';
      this.matriculeEmpty = true;
    } else {
      this.matriculeLabel = 'Matricule';
      this.matriculeEmpty = false;
    }

    if (!this.email) {
      this.emailLabel = 'Veuillez entrer votre email';
      this.emailEmpty = true;
    } else {
      this.emailLabel = 'Email';
      this.emailEmpty = false;
    }
  }

  goToNextStep() {
    this.isEmpty();
    if (this.showForm1 && !this.nameEmpty && !this.prenomEmpty && !this.telephoneEmpty && !this.matriculeEmpty && !this.emailEmpty) {
      this.showForm1 = false;
      this.showForm2 = true;
      this.progressWidth = '66.66%';
    } else if (this.showForm2) {
      this.showForm2 = false;
      this.showForm3 = true;
      this.progressWidth = '100%';
    }
  }

  goToPrevStep() {
    if (this.showForm2) {
      this.showForm2 = false;
      this.showForm1 = true;
      this.progressWidth = '33.33%';
    } else if (this.showForm3) {
      this.showForm3 = false;
      this.showForm2 = true;
      this.progressWidth = '66.66%';
    }
  }
}
