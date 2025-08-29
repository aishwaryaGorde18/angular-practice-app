import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create-employee',
    loadComponent: () => import('./employee/employee.component').then(m => m.EmployeeComponent)
  },
  { path: '', redirectTo: 'create-employee', pathMatch: 'full' }
];
