import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  menuIsVisible: boolean = false;
  structureIsVisible: boolean = false;
  adminIsvisible: boolean = false;

  menu: any = {
    LanguageDropdown: false,
    UserDropdown: false,
    menuDropdown: false
  };

  structure: any = {
    structureDropdown: false
  };

  admin: any = {
    adminDropdown : false  
  }

  constructor(private router: Router) {}

  toggleMenu(menu: any, event: MouseEvent) {
    this.menu[menu] = !this.menu[menu];

    Object.keys(this.menu).forEach(key => {
      if (menu != key) {
        this.menu[key] = false;
      }
    });
  }

  showAdminDropdown(){
    this.admin.adminDropdown = true ;
  }

  hideAdminDropdown(){
    this.admin.adminDropdown = false ;
  }

  showStructureDropdown() {
    this.structure.structureDropdown = true;
  }

  hideStructureDropdown() {
    this.structure.structureDropdown = false;
  }

  @HostListener('document:click', ['$event'])
  closemenus(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.menu.LanguageDropdown = false;
      this.menu.UserDropdown = false;
      this.menu.menuDropdown = false;
      this.structure.structureDropdown = false;
    }
  }

  navigateToProfile() {
    this.router.navigate(['profile']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToParametre() {
    this.router.navigate(['parametres']);
  }

  navigateToStructure() {
    this.router.navigate(['structure']);
  }

  navigateToPlant(){
    this.router.navigate(['structure-plant']);
  }

  navigateToSegment() {
    this.router.navigate(['structure-segment']);
  }

  navigateToLigne(){
    this.router.navigate(['ligne']);
  }

  navigateToUtilisateur() {
    this.router.navigate(['utilisateur']);
  }
    

}
