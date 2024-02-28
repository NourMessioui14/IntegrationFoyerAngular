import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-unifront',
  templateUrl: './unifront.component.html',
  styleUrls: ['./unifront.component.css']
})
export class UnifrontComponent {
  searchText:any;

  universites: Universite[]=[];

  constructor(private router: Router, private universiteService: UniversiteService){
    
   }

  ngOnInit() {
    this.universiteService.getUniversiteList().subscribe(
      (data: any) => {
        this.universites = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }

  deleteUniversite(idUniversite: number){
    this.universiteService.deleteUniversite(idUniversite).subscribe((response) => {
      console.log(response);
      this.universites=this.universites.filter((u:any)=>{
        return idUniversite !=u.idUniversite;
      }
      );
    })
  }

}
