import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent],
  template: `<h1 class="text-center mt-3">Employee Portal</h1>
             <app-employee></app-employee>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
