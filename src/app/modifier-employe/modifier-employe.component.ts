import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-employe',
  templateUrl: './modifier-employe.component.html',
  styleUrls: ['./modifier-employe.component.css']
})
export class ModifierEmployeComponent {

  matricule: string = '';
  matriculelabel: string = 'Matricule';
  matriculeEmpty: boolean = false;

  name: string = '';
  nameLabel: string = 'Nom';
  nameEmpty: boolean = false;

  surname: string = '';
  surnameLabel: string = 'Prénom';
  surnameEmpty: boolean = false;

  phone: string = '';
  phoneLabel: string = 'Téléphone';
  phoneEmpty: boolean = false;

  hireDate: string = '';
  hireDateLabel: string = 'Date d\'embauche';
  hireDateEmpty: boolean = false;

  site: string = '';
  siteLabel: string = 'Site';
  siteEmpty: boolean = false;

  plantName: string = '';
  plantNamelabel: string = 'Nom de votre plant';
  plantNameEmpty: boolean = false;

  line: number | null = null;
  lineLabel: string = 'Nombre de Lignes';
  lineEmpty: boolean = false;

  segment: number | null = null;
  segmentLabel: string = 'Nombre de Segments';
  segmentEmpty: boolean = false;

  isEmpty() {
    this.matriculeEmpty = !this.matricule;
    this.matriculelabel = this.matriculeEmpty ? 'Veuillez entrer votre matricule' : 'Matricule';

    this.nameEmpty = !this.name;
    this.nameLabel = this.nameEmpty ? 'Veuillez entrer le nom' : 'Nom';

    this.surnameEmpty = !this.surname;
    this.surnameLabel = this.surnameEmpty ? 'Veuillez entrer le prénom' : 'Prénom';

    this.phoneEmpty = !this.phone;
    this.phoneLabel = this.phoneEmpty ? 'Veuillez entrer le téléphone' : 'Téléphone';

    this.hireDateEmpty = !this.hireDate;
    this.hireDateLabel = this.hireDateEmpty ? 'Veuillez entrer la date d\'embauche' : 'Date d\'embauche';

    this.siteEmpty = !this.site;
    this.siteLabel = this.siteEmpty ? 'Veuillez entrer le site' : 'Site';

    this.plantNameEmpty = !this.plantName;
    this.plantNamelabel = this.plantNameEmpty ? 'Veuillez entrer le nom de plant' : 'Nom de votre plant';

    this.lineEmpty = this.line === null;
    this.lineLabel = this.lineEmpty ? 'Veuillez entrer le nombre de lignes' : 'Nombre de Lignes';

    this.segmentEmpty = this.segment === null;
    this.segmentLabel = this.segmentEmpty ? 'Veuillez entrer le nombre de segments' : 'Nombre de Segments';
  }
}
