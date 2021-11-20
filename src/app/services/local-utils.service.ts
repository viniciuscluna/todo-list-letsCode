import { Injectable } from '@angular/core';
import { ITask } from '../models/ITask';

const localStorageName = 'todo-list'

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


  getTasks(): ITask[] {
    if (!localStorage.getItem(localStorageName)) {
      localStorage.setItem(localStorageName, JSON.stringify(defaultTasks))
      return defaultTasks
    }
    return JSON.parse(localStorage.getItem(localStorageName) || '') as ITask[]
  }

  setTask(task: ITask) {
    var tasks = this.getTasks()
    tasks.push(task)
    localStorage.setItem(localStorageName, JSON.stringify(tasks))
  }

  updateAll(tasks: ITask[]){
    localStorage.setItem(localStorageName, JSON.stringify(tasks))
  }
}
