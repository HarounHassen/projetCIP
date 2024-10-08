import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})
export class GestionRolesComponent {
  showArea = false;
  newRole = { titre: '', description: '', assigner: false };
  roles = [
    { titre: 'Opex', description: 'Opex', assigner: false },
    { titre: 'Contre-Maitre', description: 'Contre-Maitre', assigner: false },
    { titre: 'Chef-Segment', description: 'Chef-Segment', assigner: false },
    { titre: 'Expert', description: 'Expert', assigner: false },
    { titre: 'Admin', description: 'Admin', assigner: false },
    { titre: 'Admin-Secondaire', description: 'Admin-Secondaire', assigner: false }
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
