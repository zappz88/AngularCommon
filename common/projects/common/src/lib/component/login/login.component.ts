import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
import { LoadingSpinnerService } from '../../service/loadingSpinner/loading-spinner.service';

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
    MatProgressSpinnerModule,
    NgIf
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
  isLoading: boolean = false;
  @Input() redirect: string = "/home";

  constructor(
    private loginFormBuilder: FormBuilder, 
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingSpinnerService: LoadingSpinnerService
    ) {

  }
  
  ngOnInit(): void {
    this.loginFormGroup = this.loginFormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loadingSpinnerService.isLoading$.subscribe(result => {
      this.isLoading = result;
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
    this.loadingSpinnerService.show();

    if(this.loginFormGroup.valid){
      this.userService.getUserByCredentials(this.loginFormGroup.value.username, this.loginFormGroup.value.password)
        .subscribe({
          next: (data) => {
            this.user = data;
            if(this.user){
              this.router.navigate([this.redirect]);
            }
          },
          error: (error) => {
            console.log(error);
            this.loadingSpinnerService.hide();
          },

          complete: () => {
            this.loadingSpinnerService.hide();
          }
      });
    }
    else{
      console.error("Invalid form");
    }
  }
}
