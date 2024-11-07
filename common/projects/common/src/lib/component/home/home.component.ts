import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { WebApplicationCardComponent } from '../web-application-card/web-application-card.component';
import { WebApplicationInfo } from '../../model/webApplicationInfo';
import { WebApplicationJsonConfigBase } from '../../model/webApplicationJsonConfigBase';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    WebApplicationCardComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  webApplicationInfoList : WebApplicationInfo [] | null = [];

  constructor(
    private webApplicationJsonConfig: WebApplicationJsonConfigBase
  ) {
    this.webApplicationInfoList = webApplicationJsonConfig.webApplicationInfos
  }
}
