import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthenticationService } from '../../service/serviceModule';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isAuthenticated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.isAuthenticated$.subscribe(result => {
      this.isAuthenticated = result;
    })
  }

  onClick(route: any){
    this.router.navigate(route);
  }
}
