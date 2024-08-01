import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menu: any = {
    userDropdown: false,
    LanguageDropdown: false
  };

  structure: any = {
    structureDropdown: false
  };

  utilisateur: any = {
    utilisateurDropdown: false
  };

  idees: any = {
    ideesDropdown: false
  };

  admin: any = {
    adminDropdown: false  
  };

  notification: any = {
    notificationDropdown: false  
  };

  constructor(private router: Router) {}

  toggleMenu(menu: string, event: MouseEvent) {
    this.menu[menu] = !this.menu[menu];
    this.closeOtherDropdowns(menu);
  }

  toggleUserDropdown(event: MouseEvent) {
    this.menu.userDropdown = !this.menu.userDropdown;
    this.closeOtherDropdowns('userDropdown');
  }

  toggleAdminDropdown() {
    this.admin.adminDropdown = !this.admin.adminDropdown;
    this.closeOtherDropdowns('adminDropdown');
  }

  toggleNotificationDropdown(event: MouseEvent) {
    this.notification.notificationDropdown = !this.notification.notificationDropdown;
    this.closeOtherDropdowns('notificationDropdown');
  }

  toggleStructureDropdown(event: MouseEvent) {
    this.structure.structureDropdown = !this.structure.structureDropdown;
    this.closeOtherDropdowns('structureDropdown');
  }

  closeOtherDropdowns(openedDropdown: string) {
    const dropdowns = ['userDropdown', 'structureDropdown', 'notificationDropdown', 'LanguageDropdown', 'adminDropdown', 'utilisateurDropdown', 'ideesDropdown'];
    dropdowns.forEach(dropdown => {
      if (dropdown !== openedDropdown) {
        if (this.menu[dropdown] !== undefined) {
          this.menu[dropdown] = false;
        } else if (this.structure[dropdown] !== undefined) {
          this.structure[dropdown] = false;
        } else if (this.notification[dropdown] !== undefined) {
          this.notification[dropdown] = false;
        } else if (this.admin[dropdown] !== undefined) {
          this.admin[dropdown] = false;
        } else if (this.utilisateur[dropdown] !== undefined) {
          this.utilisateur[dropdown] = false;
        } else if (this.idees[dropdown] !== undefined) {
          this.idees[dropdown] = false;
        }
      }
    });
  }

  @HostListener('document:click', ['$event'])
  closeMenus(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.menu.userDropdown = false;
      this.structure.structureDropdown = false;
      this.utilisateur.utilisateurDropdown = false;
      this.idees.ideesDropdown = false;
      this.admin.adminDropdown = false;
      this.notification.notificationDropdown = false;
      this.menu.LanguageDropdown = false;
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

  navigateToRole() {
    this.router.navigate(['gestion-roles']);
  }

  navigateToPlant() {
    this.router.navigate(['structure-plant']);
  }

  navigateToSegment() {
    this.router.navigate(['structure-segment']);
  }

  navigateToLigne() {
    this.router.navigate(['ligne']);
  }

  navigateToUtilisateur() {
    this.router.navigate(['utilisateur']);
  }

  navigateToIdees() {
    this.router.navigate(['idees']);
  }

  navigateToPermission() {
    this.router.navigate(['gestion-permissions']);
  }

  navigateToConfiguration() {
    this.router.navigate(['configuration-application']);
  }
}
