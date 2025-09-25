import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCompoent } from './login/login.compoent';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FormExample } from './form.example/form.example';
import { ProfileForm } from './profile.form/profile.form';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddProduct } from './product/add-product/add-product';

export const routes: Routes = [
    {path:'', component: LoginCompoent},
    {path:'home', component: HomeComponent},
    {path:'contact', component: ContactComponent},
    {path:'about', component: AboutComponent},
    {path:'product', component: ProductComponent},
    {path:'form', component: FormExample},
    {path:'profile', component: ProfileForm},
    {path: 'addProduct', component: AddProduct},
    {path: '**', component: ErrorPageComponent}
];
