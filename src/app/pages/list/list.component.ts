import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalUtilsService } from 'src/app/services/local-utils.service';
import { ITask } from '../../models/ITask'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  tasks: ITask[] = [];

  delete(task: ITask) {
    const idx = this.tasks.indexOf(task)
    this.tasks.splice(idx, 1)
  }
  constructor(private localStorageUtils: LocalUtilsService) { }

  ngOnInit(): void {
    this.tasks = this.localStorageUtils.getTasks()
  }

  ngOnDestroy(): void {
    this.localStorageUtils.updateAll(this.tasks)
  }

}
