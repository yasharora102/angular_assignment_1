import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';
import { Task4Component } from './components/task4/task4.component';
import { Task5Component } from './components/task5/task5.component';
import { Task6Component } from './components/task6/task6.component';
import { Task7Component } from './components/task7/task7.component';
import { Task8Component } from './components/task8/task8.component';
import { Task9Component } from './components/task9/task9.component';
import { Task10Component } from './components/task10/task10.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Task1Component, Task2Component, Task3Component, Task4Component, Task5Component, Task6Component, Task7Component, Task8Component, Task9Component, Task10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment';
  tasks = Array(10).fill(0).map((_, i) => `Task ${i + 1}`);
}
