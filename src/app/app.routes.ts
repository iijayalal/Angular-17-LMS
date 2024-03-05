import { Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { SchemgenerateComponent } from './schemgenerate/schemgenerate.component';

export const routes: Routes = [
    {'path': '', component:PlanComponent},
    { 'path': 'schemgenerate', component:SchemgenerateComponent},
    
];
