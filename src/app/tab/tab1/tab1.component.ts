import { JsonPipe, NgFor } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormViewComponent } from '../../form-view/form-view.component';
import { IPersonalDetails } from '../../model/tabform';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
  imports: [NgFor, ReactiveFormsModule, JsonPipe, FormViewComponent],
})
export class Tab1Component extends FormViewComponent implements OnInit {
  personalDetails: IPersonalDetails = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    aliases: [],
  };
  profileForm = this.formBuilder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('behera')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    super();
  }
  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe((changes) => {
      this.personalDetails = {
        firstName: changes.firstName!,
        lastName: changes.lastName!,
        street: changes.address?.street!,
        city: changes.address?.city!,
        state: changes.address?.state!,
        zip: changes.address?.zip!,
        aliases: changes.aliases! as string[],
      };
      this.setEmitter(this.personalDetails);
      this.updateChanges();
    });
    this.setEmitter(this.personalDetails);
    this.updateChanges();
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Jitendra',
      lastName: 'Kumar',
      address: {
        street: 'Kendrapara',
        city: 'tinimuhani',
        state: 'odisha',
        zip: '754001',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control('behera'));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
