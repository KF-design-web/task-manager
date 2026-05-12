import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}