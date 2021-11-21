import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ITask } from '../models/ITask';
import { IUser } from '../models/IUser';

const localStorageTaskName = 'todo-list'
const localStorageUserName = 'user'

const defaultTasks: ITask[] = [{
  Name: 'First Task',
  Done: false
},
{
  Name: 'Second Task',
  Done: true
}]


@Injectable({
  providedIn: 'root'
})
export class LocalUtilsService {

  constructor() { }

  setLogin(user: IUser): IUser {
    if (!this.getLogin()) {
      localStorage.setItem(localStorageUserName, JSON.stringify(user))
    }
    return user
  }
  getLogin() {
    return localStorage.getItem(localStorageUserName)
  }

  clearLogin() {
    localStorage.removeItem(localStorageUserName)
  }

  getTasks(): ITask[] {
    if (!localStorage.getItem(localStorageTaskName)) {
      localStorage.setItem(localStorageTaskName, JSON.stringify(defaultTasks))
      return defaultTasks
    }
    return JSON.parse(localStorage.getItem(localStorageTaskName) || '') as ITask[]
 
  }

  getTasksPipe(): Observable<ITask[]> {
    const obs = of(this.getTasks());
    return obs.pipe(delay(500));
  }

  setTask(task: ITask) {
    var tasks = this.getTasks()
    tasks.push(task)
    localStorage.setItem(localStorageTaskName, JSON.stringify(tasks))
  }

  updateAll(tasks: ITask[]) {
    localStorage.setItem(localStorageTaskName, JSON.stringify(tasks))
  }
  updateTask(task: ITask) {
    let tasks = this.getTasks()
    const idx = tasks.indexOf(task)
    tasks[idx] = task

  }
}
