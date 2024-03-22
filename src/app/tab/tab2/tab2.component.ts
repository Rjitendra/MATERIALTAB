import { NgFor, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormViewComponent } from '../../form-view/form-view.component';
import { IEducation, IEducationDetail, IEducationGroup } from '../../model/tabform';

@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
  imports: [NgFor, ReactiveFormsModule, JsonPipe, FormViewComponent],
})
export class Tab2Component extends FormViewComponent implements OnInit {
  educationGroup!: FormGroup<IEducation>;
  educationDetail: IEducationDetail[] = [
    {
      schoolName: '',
      qualification: '',
      passoutYear: 0,
      percentage: 0,
    },
  ];
  educationArray = new FormArray([
    new FormGroup<IEducationGroup>({
      schoolName: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      passoutYear: new FormControl(0, { nonNullable: true }),
      percentage: new FormControl(0, { nonNullable: true }),
    }),
  ]);

  constructor() {
    super();
    this.educationGroup = new FormGroup({
      education: this.educationArray,
    });
  }
  ngOnInit(): void {
    this.educationGroup.valueChanges.subscribe((changes) => {
      this.educationDetail = changes.education;
      this.setEmitter(this.educationDetail);
      this.updateChanges();
    });
    this.setEmitter(this.educationDetail);
    this.updateChanges();
  }
  formArrayAdd() {
    this.educationArray.push(
      new FormGroup<IEducationGroup>({
        schoolName: new FormControl('', Validators.required),
        qualification: new FormControl('', Validators.required),
        passoutYear: new FormControl(0, { nonNullable: true }),
        percentage: new FormControl(0, { nonNullable: true }),
      })
    );
  }
}
