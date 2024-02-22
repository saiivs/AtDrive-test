import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {path:"",redirectTo: "/home", pathMatch: "full"},
  {path:"home",component:HomeComponent},
  {path:"users",component:UserListComponentComponent},
  {path:"error",component:ErrorPageComponent},
  {path:"**",component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
