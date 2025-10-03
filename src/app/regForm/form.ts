import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  name: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  zip: string= '';
  savedTime: string = '';

  // Sign Up form Reference
  @ViewChild('regForm') formRef!: NgForm;

  // restoring old data from local storage based on users choice.
  ngAfterViewInit(){
    setTimeout(() => {
      try {
        const dataLength = localStorage.getItem('formData')?.length ?? 0;

        if(dataLength > 0){
          const formData = JSON.parse(localStorage.getItem('formData') || '');
          const savedTime = formData[0]?.savedTime ?? '';

          // get confirmatiom from user to restore formdata or not.
          if(confirm(`Want to restore your old data on: [ ${savedTime} ]`)){
            this.updateForm();
            localStorage.removeItem('formData'); // after restoring data in form, removing formData from localstorage.
          }
        }
      }
      catch(e){}
    }, 1000);

  }

  // verifying all inputs fields does it contains values or not.
  checkInputs(): boolean{
   return !(this.name === '' && this.email === '' && this.address === '' && this.city === '' && this.state === '' && this.country === '' && this.password === '' && this.zip === '');
  }

  // checking the form for touched or manipulated
  checkChanges(): boolean{

    if(this.formRef?.dirty && this.formRef?.touched && this.checkInputs()){
      return true;
    }

    else{
      return false;
    }

  }

  // get user confirmation to restore old data of the form
  notify(){
    if(confirm('click ok to save the form')){
      this.storeFormData('formData');
      //this.updateForm();
      return true;
    }
    else{
      return false;
    }
  }

  // reseting the registeration form
  resetForm(){
    this.name = '';
    this.email = '';
    this.password = '';
    this.address = '';
    this.city  = '';
    this.state  = '';
    this.country = '';
    this.zip = '';
    this.savedTime = '';
  }

  // storing unfinished form data in local storage
  storeFormData(storageName: string){
    const date = new Date();
    this.savedTime = date.toDateString();

    const formData = [{
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      city: this.city,
      state: this.state,
      country: this.country,
      zip: this.zip,
      savedTime: this.savedTime,
    }]
    localStorage.setItem(`${storageName}`, JSON.stringify(formData));
  }

  // update the old form data from local storage.
  updateForm(){
    const formData = JSON.parse(localStorage.getItem('formData') || '[]');

    if(formData && typeof formData === 'object'){
      this.name = formData[0]?.name ?? '';
      this.email = formData[0]?.email ?? '';
      this.address = formData[0]?.address ?? '';
      this.city = formData[0]?.city ?? '';
      this.state = formData[0]?.state ?? '';
      this.country = formData[0]?.country ?? '';
      this.zip = formData[0]?.zip ?? '';
    }
  }

  // handle form submit.
  onSubmit(){
    if(this.formRef.valid){
      this.storeFormData('users');
      alert('Form Submitted successfully.');
      this.resetForm();
    }

  }

}
