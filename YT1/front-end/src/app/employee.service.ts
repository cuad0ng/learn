import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private API_SERVER_URL = environment.API_BASE_URL;
  constructor(private http: HttpClient) {}

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_SERVER_URL}/employee/all`);
  }
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.API_SERVER_URL}/employee/add`,
      employee
    );
  }
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.API_SERVER_URL}/employee/update`,
      employee
    );
  }
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.API_SERVER_URL}/employee/delete/${employeeId}`
    );
  }
}
