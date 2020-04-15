import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';
  note='';
  todoList:string[] = [];

  addNote()
  {
      this.todoList.push(this.note);
      this.note='';
  }
  onComplete(index)
  {
    this.todoList.splice(index,1);
  }
}
