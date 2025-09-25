import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
  selector: 'app-profile.form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile.form.html',
  styleUrl: './profile.form.css'
})
export class ProfileForm {

  message='';
  userProfile = {};
  profiles: any[] = []

  constructor(){
    // fetch data from localStorage
    this.profiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');

    if(this.profiles && this.profiles[0]){
      this.updateProfile(this.profiles[0]);
    }

  }

  // form builder
  formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(18)]],
    email: ['', [Validators.required, Validators.email]],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      country: [''],
    }),

    aliases: this.formBuilder.array([]),
  });

  //getter of aliases
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  // add aliases in form
  addAliases(){
    this.aliases.push(this.formBuilder.control(''));
  }

  // remove aliases by index
  removeAlias(index: number){
    this.aliases.removeAt(index);
  }


  // handle form submit
  onSubmit(){

    // form data
    const profile = this.profileForm.value;
    this.userProfile = {
        fname: profile.firstname,
        lname: profile.lastname,
        age: profile.age,
        email: profile.email,
        address: {
          street: profile.address?.street,
          city: profile.address?.city,
          state: profile.address?.state,
          country: profile.address?.country,

        },
        //aliases: profile.aliases?.length > 0 ? profile.aliases?.forEach()
    }

    this.storeInLocal();
    this.message='profile updated.'
  }

  storeInLocal(){
    this.profiles.push(this.userProfile);
    localStorage.setItem('userProfiles', JSON.stringify(this.profiles));
  }

  updateProfile(profile: any): void{
    this.profileForm.patchValue({
      firstname: profile.fname,
      lastname: profile.lname,
      age: profile.age,
      email: profile.email,
      address: {
        street: profile.address?.street,
        city: profile.address?.city,
        state: profile.address?.state,
        country: profile.address?.country,
      }

    });

  }
}
