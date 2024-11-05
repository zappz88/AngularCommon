import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from '../../service/serviceModule';
import { User, Credential } from '../../model/modelModule';
import { Observable } from 'rxjs';
import { RegexPattern } from '../../security/securityModule';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterLink,
    HttpClientModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
  });
  
  user: any;

  constructor(
    private loginFormBuilder: FormBuilder, 
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    ) {

  }
  
  ngOnInit(): void {
    this.loginFormGroup = this.loginFormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit()
  {
    this.login();
  }

  onEnter(){
    this.login();
  }

  login(){
    if(this.loginFormGroup.valid){
      this.userService.getUserByCredentials(this.loginFormGroup.value.username, this.loginFormGroup.value.password).subscribe(result => { this.user = result });
      if(this.user){
        this.router.navigate(['/home']);
      }
    }
    else{
      console.error("Invalid form");
    }
  }
}
