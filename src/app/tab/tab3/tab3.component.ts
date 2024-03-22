import { NgFor, JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormViewComponent } from '../../form-view/form-view.component';
import { IExperienceDetail } from '../../model/tabform';

@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css'],
  imports: [NgFor, ReactiveFormsModule, JsonPipe, FormViewComponent],
})
export class Tab3Component extends FormViewComponent implements OnInit {
  experienceDetail: IExperienceDetail = { experience: 0 };
  experience = new FormControl(2);

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }
  ngOnInit(): void {
    this.experience.valueChanges.subscribe((changes) => {
      this.experienceDetail.experience = +changes!;
      this.setEmitter(this.experienceDetail!);
      this.updateChanges();
    });
    this.setEmitter(this.experienceDetail!);
    this.updateChanges();
  }
}
