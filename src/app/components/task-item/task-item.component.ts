import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

import { Task } from '../../interfaces/task/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  @Output() toggleComplete = new EventEmitter();

  toggleTask() {
    this.toggleComplete.emit();
  }
}
