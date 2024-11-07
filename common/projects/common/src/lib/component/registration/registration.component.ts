import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerService, UserService } from '../../service/serviceModule';
import { User, Credential } from '../../model/modelModule';
import { Observable } from 'rxjs';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterLink,
    MatButtonModule, 
    MatCardModule, 
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatProgressSpinnerModule,  
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

  user: User | null = null;
  isLoading: boolean = false;
  @Input() redirect: string = "/login";

  constructor(
    private registrationFormBuilder: FormBuilder, 
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingSpinnerService: LoadingSpinnerService,
    private dialog: MatDialog
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

    this.loadingSpinnerService.isLoading$.subscribe(result => {
      this.isLoading = result;
    })
  }

  onSubmit() : void {
    this.register();
  }

  onEnter() : void {
    this.register();
  }

  register() : void {
    this.loadingSpinnerService.show();
    console.log("Registering user...");
    if(this.registrationFormGroup.valid){
      this.user = new User()
                    .setUserId(5)
                    .setFirstName(this.registrationFormGroup.value.firstName)
                    .setMiddleName(this.registrationFormGroup.value.middleName)
                    .setLastName(this.registrationFormGroup.value.lastName)
                    .setUsername(this.registrationFormGroup.value.username)
                    .setPassword(this.registrationFormGroup.value.password);
      this.userService.insertUser(this.user)
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
            this.dialog.open(ErrorDialogComponent, { data: { message: error.message }, height: '250px', width: '750px' });

          },

          complete: () => {
            console.log("Registration successful.");
            this.loadingSpinnerService.hide();
          }
      });
    }
    else{
      console.error("Invalid form");
    }
  }
}
