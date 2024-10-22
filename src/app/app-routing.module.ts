import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
  { path: 'task4', component: Task4Component },
  { path: 'task5', component: Task5Component },
  { path: 'task6', component: Task6Component },
  { path: 'task7', component: Task7Component },
  { path: 'task8', component: Task8Component },
  { path: 'task9', component: Task9Component },
  { path: 'task10', component: Task10Component },
  { path: '', redirectTo: '/task1', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/task1' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }