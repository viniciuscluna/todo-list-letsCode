import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ITask } from 'src/app/models/ITask';
import { LocalUtilsService } from 'src/app/services/local-utils.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})


export class ListItemComponent implements OnInit {
  @Input() task: ITask | undefined
  @Output() warnDelete: EventEmitter<ITask> = new EventEmitter();




  edited: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private localUtils: LocalUtilsService) { }

  editForm = this.formBuilder.group({
    name: ''
  });


  changeDone(task?: ITask) {
    console.log(task)
    if (task)
      task.Done = !task?.Done
  }

  delete(task?: ITask) {
    this.warnDelete.emit(task)
  }
  edit(task?: ITask) {
    this.editForm.setValue({
      name: task?.Name
    })
    this.edited = true
  }
  saveEdit(): void {
    if (this.task) {
      this.task.Name = this.editForm.value.name;
      this.localUtils.updateTask(this.task);
      this.editForm.reset();
      this.edited = false;
    }
  }

  ngOnInit(): void {
  }

}
