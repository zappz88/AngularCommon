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
  selector: 'app-registration',
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
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {

  registrationFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
});

user: any;

  constructor(
    private registrationFormBuilder: FormBuilder, 
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.registrationFormGroup = this.registrationFormBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.register();
  }

  onEnter(){
    this.register();
  }

  register(){
    if(this.registrationFormGroup.valid){
      this.user = new User();
      this.user
        .setUserId(5)
        .setFirstName(this.registrationFormGroup.value.firstName)
        .setMiddleName(this.registrationFormGroup.value.middleName)
        .setLastName(this.registrationFormGroup.value.lastName)
        .setUsername(this.registrationFormGroup.value.username)
        .setPassword(this.registrationFormGroup.value.password);
      console.log(this.user);
      this.userService.insertUser(this.user).subscribe(result => { this.user = result });
      console.log(this.user);
      if(this.user){
        this.router.navigate(['/login']);
      }
    }
    else{
      console.error("Invalid form");
    }
  }

}
