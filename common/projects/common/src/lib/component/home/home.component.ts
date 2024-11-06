import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgFor } from '@angular/common';
import { AuthenticationService } from '../../service/serviceModule';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatSidenavModule,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

  }

  list: string[] = [
    "https://images.pexels.com/photos/28958104/pexels-photo-28958104/free-photo-of-stunning-sunset-over-lake-powell-in-utah.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/17960031/pexels-photo-17960031/free-photo-of-tenements-near-canal-in-amsterdam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  ]

  logOut(){
    this.authenticationService.deleteSession();
    this.router.navigate(['']);
  }
}
