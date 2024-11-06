import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticationService, UserService, StateService } from '../../service/serviceModule';
import { User, Credential } from '../../model/modelModule';
import { Observable } from 'rxjs';
import { RegexPattern } from '../../security/securityModule';
import { LoadingSpinnerService } from '../../service/loadingSpinner/loading-spinner.service';
import { fadeIn, fadeOut } from '../../animations/animationsModule';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  animations: [
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
  });
  
  user: User | null = null;
  isLoading: boolean = false;
  @Input() redirect: string = "/home";

  fadeOut: boolean = true;

  constructor(
    private loginFormBuilder: FormBuilder, 
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private stateService: StateService,
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
    console.log("Logging in user...");
    if(this.loginFormGroup.valid){
      this.userService.getUserByCredentials(this.loginFormGroup.value.username, this.loginFormGroup.value.password)
        .subscribe({
          next: (data) => {
            if(this.user){
              this.stateService.setUser(data);
            }
          },
          error: (error) => {
            console.error(error);
            this.loadingSpinnerService.hide();
          },

          complete: () => {
            console.log("Login successful.");
            this.loadingSpinnerService.hide();
            this.authenticationService.setSession();
            this.router.navigate([this.redirect]);
          }
      });
    }
    else{
      console.error("Invalid form");
    }
  }
}
