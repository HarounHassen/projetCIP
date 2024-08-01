import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent {


  constructor(private router : Router){}
  
  modifier() {
    this.router.navigate(['modifier-employe'])
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
