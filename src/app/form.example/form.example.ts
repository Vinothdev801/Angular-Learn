import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Actor, forbiddenNameValidator } from '../../Actor';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.example.html',
  styleUrl: './form.example.css'
})
export class FormExample {

  private formBuilder = inject(FormBuilder);

  public exForm2 = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  onSubmit(){
    console.log(this.exForm2.value)
    console.log(this.model.name)
  }

  model = new Actor(1, 'av', 'developer & debugger','resolver');


   actorForm = new FormGroup({
    name: new FormControl(this.model.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
    ]),
    role: new FormControl(this.model.role),
    skill: new FormControl(this.model.skill, Validators.required),
  });


  get name() {
    return this.actorForm.get('name');
  }
  get skill() {
    return this.actorForm.get('skill');
  }


}

