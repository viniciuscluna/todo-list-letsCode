import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalUtilsService } from 'src/app/services/local-utils.service';
import { ITask } from '../../models/ITask'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  constructor(private localStorageUtils: LocalUtilsService) { }

  tasks$?: Observable<ITask[]>;
  tasks: ITask[] = []

  updateInterval: ReturnType<typeof setInterval> = setInterval(() => {
    this.tasks$?.subscribe((resp: ITask[]) => {
        this.localStorageUtils.updateAll(resp)
        this.tasks = resp
    })

  }, 1000);
  delete(task: ITask) {
    const idx = this.tasks.indexOf(task)
    this.tasks.splice(idx, 1)
  }


  ngOnInit(): void {
    this.tasks$ = this.localStorageUtils.getTasksPipe()
  }

  ngOnDestroy(): void {
    clearInterval(this.updateInterval)
  }

}
