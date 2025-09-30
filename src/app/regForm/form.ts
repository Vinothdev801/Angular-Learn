import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
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

  @ViewChild('regForm') formRef!: NgForm;

  ngAfterViewInit(){
    setTimeout(() => {
      const dataLength = localStorage.getItem('formData')?.length ?? 0;
      const formData = JSON.parse(localStorage.getItem('formData') || '');
      const savedTime = formData[0]?.savedTime ?? '';
      if(dataLength > 0){
        if(confirm(`Want to restore your old data on: [ ${savedTime} ]`)){
          this.updateForm();
        }
      }
    }, 1000);

  }

  checkInputs(): boolean{
   return !(this.name === '' && this.email === '' && this.address === '' && this.city === '' && this.state === '' && this.country === '' && this.password === '' && this.zip === '');
  }

  checkChanges(): boolean{

    if(this.formRef?.dirty && this.formRef?.touched && this.checkInputs()){
      return true;
    }

    else{
      return false;
    }

  }

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

  onSubmit(){

    if(this.formRef.valid){
      this.storeFormData('users');
      alert('Form Submitted successfully.');
      this.resetForm();
    }

  }

}
