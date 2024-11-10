import { Component, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lib-error',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  @Input() error: string | any;

  constructor(private dialog: MatDialog) {

  }

  open(){
    this.dialog.open(this.error);
  }
}
