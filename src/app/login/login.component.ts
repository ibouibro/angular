import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup;


 
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    this.myForm = this.fb.group({
      
      email: [''],
      password: ['']
    
       
    });
  }

  Submited()
  {
    
    this.http.post<any>("http://127.0.0.1:8000/api/login", this.myForm.getRawValue()).subscribe(data => {
  console.log(data.data.token);
  localStorage.setItem('token', data.data.token)
  this.router.navigate(['home']);
  });
}

}
