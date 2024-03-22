import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ExcepectedFormTypes,
  ExcepectedFormValue,
  ExcepectedFormValueEvent,
} from '../model/tabform';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class FormViewComponent {
  @Output() formValid: EventEmitter<ExcepectedFormValueEvent> =
    new EventEmitter<ExcepectedFormValueEvent>();
  emit!: ExcepectedFormValue;
  constructor() {}


  setEmitter(changes: ExcepectedFormTypes) {
    this.emit = { valid: true, value: changes };
  }
  updateChanges(): void {
    const event: ExcepectedFormValueEvent = Object.assign(
      {},
      new Event('formvalues'),
      { expected: this.emit }
    );
    this.formValid.emit(event);
  }
}
