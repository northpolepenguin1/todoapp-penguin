import { Component, OnInit } from '@angular/core';
import { Todoform } from '../todoform';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  headers: Headers;
  public submitted = false;
  public deadlines: string[] = ['指定なし', '12月1日', '12月2日', '12月3日', '12月4日', '12月5日', '12月6日', '12月7日'];
  public selectedDeadline = '指定なし';
  public currentText = '';
  public registeredFlg = true;

  public tasks: string[][] = [];

  constructor(public todoService: TodoService) { }
  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
  }

  createTask() {
    const text = this.currentText;
    const deadline = this.selectedDeadline;
    const task = [deadline, text];
    this.todoService.createTask(task).subscribe(() => {
      this.currentText = '';
      this.selectedDeadline = '指定なし';
      this.tasks.push(task);
    });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
