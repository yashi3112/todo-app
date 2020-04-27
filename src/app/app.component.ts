import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'to-do';
  note = '';
  todoList: string[] = [];

  constructor(private notesService: NotesService) {

  }
  ngOnInit() {
    this.todoList = JSON.parse(localStorage.getItem('notes')) || [];
    this.notesService.getNotes().subscribe((response: any) => {

      this.todoList = response.data.split(",");

    });
  }

  addNote() {
    if (this.note) {
      this.todoList.push(this.note);
      this.updateLocal();
      this.note = '';
    }

  }
  onComplete(index) {
    this.todoList.splice(index, 1);
    this.updateLocal();
  }
  updateLocal() {
    localStorage.setItem('notes', JSON.stringify(this.todoList));
    const noteList:string = this.todoList.join(',');
    console.log("string converted ",noteList);
    this.notesService.updateNotes(noteList).subscribe( response => {
      console.log();
    });
  }
}
