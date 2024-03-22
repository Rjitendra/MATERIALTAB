import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import {
  ExcepectedFormValue,
  ExcepectedFormValueEvent,
  ITabForm,
} from '../model/tabform';
export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  standalone: true,
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  imports: [
    MatTabsModule,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    JsonPipe,
  ],
})
export class TabComponent {
  completeForm!: ITabForm;

  constructor() {}
  formValid(v: ExcepectedFormValueEvent) {
    const value: ExcepectedFormValue =
      v.expected as unknown as ExcepectedFormValue;
    this.completeForm = Object.assign({}, this.completeForm, value.value);
  }
}
