import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { WebApplicationCardComponent } from '../web-application-card/web-application-card.component';
import { WebApplicationInfo } from '../../model/webApplicationInfo';
import { WebApplicationJsonConfigBase } from '../../model/webApplicationJsonConfigBase';
import { SimpleTableComponent } from "../simple-table/simple-table.component";
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    WebApplicationCardComponent,
    SimpleTableComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  webApplicationInfos : WebApplicationInfo [] | null = [];

  constructor(
    private webApplicationJsonConfig: WebApplicationJsonConfigBase
  ) {
    this.webApplicationInfos = webApplicationJsonConfig.webApplicationInfos;
    console.log(webApplicationJsonConfig.webApplicationInfos);
  }
}
