import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';

const routes: Routes = [
  { path: 'tutor-register', component: TutorRegisterComponent },
  { path: '', component: LandingComponent }, // pathMatch: 'full' is optional if defined in this order
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
