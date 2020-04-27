import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpClient) { }

  getNotes() {
    return this.httpService.post('/todo/',{},{
      headers:new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    });
  }
  updateNotes(value: string) {
    return this.httpService.post('/update/',{'notes':value});
  }
} 
