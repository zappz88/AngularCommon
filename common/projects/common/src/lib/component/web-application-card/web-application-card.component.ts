import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WebApplicationInfo } from '../../model/webApplicationInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-web-application-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './web-application-card.component.html',
  styleUrl: './web-application-card.component.scss'
})
export class WebApplicationCardComponent {

  @Input() webApplicationInfo: WebApplicationInfo | null = null;

  constructor(
    private router: Router
  ) {

  }

  onClick(){
    console.log("clicked");
    if(this.webApplicationInfo){
      this.router.navigateByUrl(this.webApplicationInfo.uri);
    }
  }
}
