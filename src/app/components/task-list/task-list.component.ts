import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../interfaces/task/task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) {} // Inject the service

  ngOnInit(): void {
    this._taskService.getTasks().subscribe({
      next: (data: Task[]) => (this.tasks = data),
      error: (error) => console.error('Error fetching tasks:', error),
      complete: () => console.info('Task fetching completed'),
    });
  }

  toggleTaskComplete(task: Task) {
    this._taskService.updateTask(task).subscribe({
      next: (updatedTask) => {
        console.log('Task updated in the API:', updatedTask);
        task.completed = !task.completed;
      },
      error: (error) => {
        console.error('Error updating task', error);
      },
      complete: () => console.info('Task updating completed'),
    });
  }
}
