import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee = new Employee();

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.dataService.getData().subscribe((res) => {
      this.employees = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.employee).subscribe((res) => {
      this.getEmployeeData();
    });
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe((res) => {
      this.getEmployeeData();
    });
  }
}
