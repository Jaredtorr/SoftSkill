import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },  // 🔹 Landing
  { path: 'home', component: HomeComponent }  // 🔹 Home interno
];
