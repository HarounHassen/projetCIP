import { Component } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-gestion-permissions',
  templateUrl: './gestion-permissions.component.html',
  styleUrl: './gestion-permissions.component.css'
})
export class GestionPermissionsComponent {
  showArea = false;
  newRole = { titre: '', description: '', assigner: false };
  roles = [
    { titre: 'Super_Admin_Permission', description: 'Super_Admin_Permission', assigner: false },
    { titre: 'Consultation_tableau_Bord', description: 'Consultation_tableau_Bord', assigner: false },
    { titre: 'Gestion_Des_Idées', description: 'Gestion_Des_Idées', assigner: false },
    { titre: 'Validation_Idées', description: 'Validation_Idées', assigner: false },
    { titre: 'Exportation_Données', description: 'Exportation_Données', assigner: false }
  ];

  Ajouter() {
    this.showArea = !this.showArea;
  }

  addRole() {
    if (this.newRole.titre && this.newRole.description) {
      this.roles.push({ ...this.newRole });
      this.newRole = { titre: '', description: '', assigner: false };
      this.showArea = false;
    }
  }

  onFileChange(event: any) {
    console.log('File change event triggered');
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      console.error('Cannot use multiple files');
      return;
    }
    
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      console.log('File reader onload triggered');
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log('Parsed data:', data);
      this.importData(data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  importData(data: any) {
    const importedRoles = data.slice(1).map((row: any) => ({
      titre: row[0],
      description: row[1],
      assigner: row[2] === 'TRUE'
    }));
    console.log('Imported roles:', importedRoles);
    this.roles = [...this.roles, ...importedRoles];
  }

}
