import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})

export class ErrorDialogComponent {

  message: string = 'ERROR';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message;
  }

}
