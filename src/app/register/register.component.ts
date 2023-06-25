import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

myForm: FormGroup;


  ngOnInit() {
    
  }
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      c_password: [''],
       
    });
  }

  Submited()
  {
    console.log(this.myForm.getRawValue());
    this.http.post<any>("http://127.0.0.1:8000/api/register", this.myForm.getRawValue()).subscribe(data => {
  console.log(data.data.token);
  localStorage.setItem('token', data.data.token)
  this.router.navigate(['home']);
  });
}

  }


