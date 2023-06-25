import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code_api_angular_2';

  constructor(private http: HttpClient, private router: Router){}



  isLoggedIn()
  {
    if(localStorage.getItem('token')==null)
    return false;

    return true;
  }

  deconnecter()
  {
    
  

    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }


}
