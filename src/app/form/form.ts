import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  email: string = '';
  password: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: string= '';

  @ViewChild('regForm') formRef!: NgForm;

  checkInputs(): boolean{
   return !(this.email === '' && this.address === '' && this.city === '' && this.state === '' && this.password === '' && this.zip === '');
  }

  checkChanges(): boolean{
    console.log(this.formRef);
    if(this.formRef?.dirty && this.formRef?.touched && this.checkInputs()){

      return true;
    }
    else{
      return false;
    }

  }

  notify(){
    if(confirm('click ok to save the form')){
      this.storeFormData();
      this.updateForm();
      return true;
    }
    else{
      return false;
    }
  }

  resetForm(){
    this.email = '';
    this.password = '';
    this.address = '';
    this.city  = '';
    this.state  = '';
    this.zip = '';
  }

  storeFormData(){
    const formData = [{
      email: this.email,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip
    }]
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  updateForm(){
    const formData = JSON.parse(localStorage.getItem('formData') || '[]');
    if(formData && typeof formData === 'object'){
      if(confirm('Do want to restore your saved changes')){
        this.email = formData[0]?.email ?? '';
        this.address = formData[0]?.address ?? '';
        this.city = formData[0]?.city ?? '';
        this.state = formData[0]?.state ?? '';
        this.zip = formData[0]?.zip ?? '';

      }
    }
  }

  onSubmit(){
    if(this.formRef.valid){
      alert('Form Submitted successfully.');
      this.storeFormData();
    }

  }

}
