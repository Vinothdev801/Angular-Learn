import { AbstractControl, ValidationErrors, ValidatorFn, } from "@angular/forms";

export class Actor {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public skill: string,
    public studio?: string,
  ){}

}

 export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
