import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FormExample } from './form.example/form.example';
import { ProfileForm } from './profile.form/profile.form';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddProduct } from './product/add-product/add-product';
import { Counter } from './counter/counter';
import { authGuard, unsavedChangesGuard } from './auth-guard';
import { Form } from './regForm/form';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'home', component: HomeComponent, canActivate: [authGuard]},
    {path:'contact', component: ContactComponent, canActivate: [authGuard]},
    {path:'about', component: AboutComponent, canActivate: [authGuard]},
    {path:'product', component: ProductComponent, canActivate: [authGuard]},
    {path: 'form', component: Form, canDeactivate: [unsavedChangesGuard]},
    {path:'form-eample', component: FormExample},
    {path:'profile', component: ProfileForm, canActivate: [authGuard]},
    {path: 'addProduct', component: AddProduct, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    // {path: 'counter', component: Counter},
    {path: '**', component: ErrorPageComponent}
];
