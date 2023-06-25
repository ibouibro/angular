import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})



export class ProduitsComponent implements OnInit {

nom: String="";
 
  constructor(private http: HttpClient, private router: Router)
  {
   
  }
  ngOnInit(): void {

    if(localStorage.getItem('token')==null)
    this.router.navigate(['login']);

   let hdr='Bearer '+localStorage.getItem('token');

    this.http.get<any>("http://127.0.0.1:8000/api/products",{headers: new HttpHeaders().set('Authorization', hdr)}).subscribe(data => {
      console.log(data);
     this.nom=data.data[0].name;
      
     
      });
  }
}
