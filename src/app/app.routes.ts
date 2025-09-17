import { Routes } from '@angular/router';
import {SectionComponent} from './components/section/section.component';
import {PropertyDetailComponent} from './components/property-detail/property-detail.component';

export const routes: Routes = [
  {path:'',redirectTo:'properties',pathMatch:"full" },
  {path:'properties', component:SectionComponent },
  {path:'properties/:id', component:PropertyDetailComponent },
  {path:'**', redirectTo: 'properties' }
];
