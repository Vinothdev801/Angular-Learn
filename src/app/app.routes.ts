import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProfileForm } from './profile.form/profile.form';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddProduct } from './product/add-product/add-product';
import { Form } from './regForm/form';
import { authGuard, unsavedChangesGuard } from './guards/auth-guard';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
 // { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
 // { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'product', component: ProductComponent, canActivate: [authGuard] },
  { path: 'form', component: Form, canDeactivate: [unsavedChangesGuard] },
  { path: 'profile', component: ProfileForm, canActivate: [authGuard] },
  { path: 'addProduct', component: AddProduct, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorPageComponent },
];
