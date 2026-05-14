import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  newTaskName = '';

  tasks = [
    { id: 1, name: 'Learn TypeScript', completed: true },
    { id: 2, name: 'Setup Angular project', completed: true },
    { id: 3, name: 'Build task list component', completed: false },
    { id: 4, name: 'Connect to Spring Boot API', completed: false },
    { id: 5, name: 'Add authentication', completed: false },
  ];

  addTask() {
    if (this.newTaskName.trim() === '') return;
    this.tasks.push({
      id: this.tasks.length + 1,
      name: this.newTaskName,
      completed: false
    });
    this.newTaskName = '';
  }
}