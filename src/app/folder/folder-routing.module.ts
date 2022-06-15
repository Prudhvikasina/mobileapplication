import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegComponent } from '../reg/reg.component';
import { SignupComponent } from '../signup/signup.component';
import { WeluserComponent } from '../weluser/weluser.component';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {path:'reg', component:RegComponent},
  {path: 'login', component:LoginComponent},
  {path: 'weluser',component:WeluserComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
