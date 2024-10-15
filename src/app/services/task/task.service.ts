import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Task } from '../../interfaces/task/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  // Method to fetch tasks from API
  getTasks(): Observable<Task[]> {
    const url = `${this._apiUrl}/tasks`;
    return this._http.get<Task[]>(url);
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this._apiUrl}/tasks/${task.id}`;
    return this._http.put<Task>(url, { completed: task });
  }
}
