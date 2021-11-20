import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ITask } from 'src/app/models/ITask';
import { LocalUtilsService } from 'src/app/services/local-utils.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent {

  taskForm = this.formBuilder.group({
    name: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private localUtils: LocalUtilsService
  ) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.taskForm.value);
    this.localUtils.setTask({Name: this.taskForm.value.name, Done:false} as ITask)
    this.taskForm.reset();
  }
}
