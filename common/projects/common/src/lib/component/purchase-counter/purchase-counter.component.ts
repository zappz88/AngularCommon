import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lib-purchase-counter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './purchase-counter.component.html',
  styleUrl: './purchase-counter.component.scss'
})
export class PurchaseCounterComponent extends CounterComponent{
  
  constructor() {
    super();    
  }

  override increment() : void {
    super.increment();
  }

  override decrement() : void {
    if(this.count > 0){
      super.decrement();
    }
  }
}
