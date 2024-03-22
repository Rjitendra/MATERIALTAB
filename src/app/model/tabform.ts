import { FormControl, FormArray } from "@angular/forms";

export interface ITabForm {
  firstName: string;
  lastName: string;
  address: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  aliases: string[];
  schoolName: string;
  qualification: string;
  passoutYear: number;
  percentage: number;
  experience: number;
}
export interface IPersonalDetails {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  aliases: string[];
}
export interface IEducationDetail {
  schoolName: string;
  qualification: string;
  passoutYear: number;
  percentage: number;
}
export interface IExperienceDetail {
  experience: number;
}
export type ExcepectedFormTypes =
  | IPersonalDetails
  | IExperienceDetail
  | IEducationDetail[];
export type ExcepectedFormValue = {
  valid: boolean;
  value: ExcepectedFormTypes;
};
export interface ExcepectedFormValueEvent extends Event {
  expected: ExcepectedFormValue;
}
export interface IEducationGroup {
  schoolName: FormControl<string | null>;
  qualification: FormControl<string | null>;
  passoutYear: FormControl<number | null>;
  percentage: FormControl<number | null>;
}
export interface IEducation {
  education: FormArray<any>;
}