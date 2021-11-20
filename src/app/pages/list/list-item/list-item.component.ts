import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/ITask';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})


export class ListItemComponent implements OnInit {
  @Input() task: ITask | undefined
  @Output() warnDelete: EventEmitter<ITask> = new EventEmitter();
  constructor() { }

  changeDone(task?: ITask) {
    console.log(task)
    if (task)
      task.Done = !task?.Done
  }

  delete(task?: ITask){
    this.warnDelete.emit(task)
  }
  ngOnInit(): void {
  }

}
