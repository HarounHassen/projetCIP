import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration-application',
  templateUrl: './configuration-application.component.html',
  styleUrl: './configuration-application.component.css'
})
export class ConfigurationApplicationComponent {
  showForm1: boolean = true;
  showForm2: boolean = false;
  showForm3: boolean = false;
  showForm4: boolean = false;
  showForm5: boolean = false;
  showForm6: boolean = false;
  showForm7: boolean = false;

  Ajouter() {
    // Functionality to add a new property
  }

  navigateToMain(){
    this.showForm1 = true;
    this.showForm2 = false;
    this.showForm3 = false;
    this.showForm4 = false;
    this.showForm5 = false;
    this.showForm6 = false;
    this.showForm7 = false;
  }
}
