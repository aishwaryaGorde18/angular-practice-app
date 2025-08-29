import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
employee: Employee = { id: 0, name: '', department: '', salary: 0, createdAt: undefined, updatedAt: undefined };

  isEdit: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // ✅ Fetch employees from backend
  loadEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error("Error fetching employees:", err)
    });
  }

  // ✅ Save (Add or Update)
  saveEmployee() {
    if (!this.employee.name || !this.employee.department || this.employee.salary <= 0) {
      alert("Please fill all fields correctly!");
      return;
    }

    if (this.isEdit) {
      // update employee
      this.employeeService.updateEmployee(this.employee).subscribe({
        next: () => {
          this.loadEmployees();
          this.resetForm();
        }
      });
    } else {
      // add new employee
      this.employeeService.createEmployee(this.employee).subscribe({
        next: (res) => {
          this.employees.push(res);  // update UI after backend save
          this.resetForm();
        }
      });
    }
  }

  // ✅ Reset form
  resetForm() {
    this.employee = { id: 0, name: '', department: '', salary: 0 };
    this.isEdit = false;
  }

  // ✅ Edit employee
  editEmployee(emp: Employee) {
    this.employee = { ...emp };
    this.isEdit = true;
  }

  // ✅ Delete employee
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(e => e.id !== id);
        if (this.employee.id === id) this.resetForm();
      }
    });
  }
}
