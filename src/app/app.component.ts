import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'to-do';
  note='';
  todoList:string[] = [];

  ngOnInit()
  {
    this.todoList = JSON.parse(localStorage.getItem('notes')) || [];
  }

  addNote()
  {
    if(this.note)
    {
      this.todoList.push(this.note);
      this.updateLocal();
      this.note='';
    }
      
  }
  onComplete(index)
  {
    this.todoList.splice(index,1);
    this.updateLocal();
  }
  updateLocal()
  {
    localStorage.setItem('notes',JSON.stringify(this.todoList));
  }
}
