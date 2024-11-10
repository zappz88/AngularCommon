import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonPressEvent } from '../../model/event/buttonPressEvent';
import { ButtonType } from '../../model/buttonType';

@Component({
  selector: 'lib-counter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Output() buttonPressEventEmitter: EventEmitter<ButtonPressEvent> = new EventEmitter<ButtonPressEvent>();
  @Input() count: number = 0;

  constructor() {
    
  }

  increment() : void {
    this.count++;
  }

  decrement() : void {
    this.count--;
  }

  handleIncrementButtonPressed(){
    this.increment();
    this.emitIncrementButtonPressedEvent();
  }

  handleDecrementButtonPressed(){
    this.decrement();
    this.emitDecrementButtonPressedEvent();
  }

  emitIncrementButtonPressedEvent(){
    this.buttonPressEventEmitter.emit(new ButtonPressEvent(ButtonType.Increment, this.count));
  }

  emitDecrementButtonPressedEvent(){
    this.buttonPressEventEmitter.emit(new ButtonPressEvent(ButtonType.Decrement, this.count));
  }
}
