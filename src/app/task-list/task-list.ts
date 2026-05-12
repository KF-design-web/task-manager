import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  tasks = [
    { id: 1, name: 'Learn TypeScript', completed: true },
    { id: 2, name: 'Setup Angular project', completed: true },
    { id: 3, name: 'Build task list component', completed: false },
    { id: 4, name: 'Connect to Spring Boot API', completed: false },
    { id: 5, name: 'Add authentication', completed: false },
  ];
}