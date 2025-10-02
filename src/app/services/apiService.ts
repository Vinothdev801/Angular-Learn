import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../type/Todo";

@Injectable({providedIn: 'root'})
export class Api{
  http = inject(HttpClient);


  getData(id: number | ''): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  getAllData(){
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos/');
  }
}
