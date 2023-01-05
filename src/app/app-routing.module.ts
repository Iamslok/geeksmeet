import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddYourSkillsComponent } from './add-your-skills/add-your-skills.component';

const routes: Routes = [
  {path:'add-your-skills', component:AddYourSkillsComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
