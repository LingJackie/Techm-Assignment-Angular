import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
const routes: Routes = [
  { path: 'profile-page-component', component: ProfilePageComponent },
  { path: 'registration-form-component', component: RegistrationFormComponent },
  { path: 'user-data-display-component', component: UserDataDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
