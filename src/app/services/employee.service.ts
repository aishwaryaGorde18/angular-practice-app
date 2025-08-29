import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = 'http://localhost:8181/employees';

  constructor(private http: HttpClient) {}

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  // create many
  createEmployees(employees: Employee[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/addEmployees`, employees);
  }

  // ✅ fetch all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  
}

updateEmployee(employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(`${this.baseUrl}/${employee.id}`, employee);
}

deleteEmployee(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
