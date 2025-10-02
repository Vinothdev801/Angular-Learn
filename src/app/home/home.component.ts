import { Component, inject, Inject, input, Input, signal } from '@angular/core';
import { HighlightDirective } from '../Directives/HighlightDirective';
import { Api } from '../services/apiService';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SampleSubject } from '../SubjectExample';
import { HighlightCompletedTodo } from '../Directives/HighlightCompletedTodo';
import { Todo } from '../type/Todo';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [
    HighlightDirective, CommonModule, NavbarComponent,
    HighlightCompletedTodo, FilterTodosPipe, FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  @Input() parentMsg: string=''


  api = inject(Api); // 
  todoItems = signal<Array<Todo>>([]);
  searchTodo = signal('');

  private sub = new SampleSubject();

  // example of observables
  constructor(){
    this.sub.sample.subscribe(value => {
      console.log("new subscriber", value);
    })

    this.sub.emitValue(12);
  }



  show(){
   this.api.getAllData().subscribe(data =>
    this.todoItems.set(data)
  );
  }

  todoClicked(todoItem: Todo){
    
    this.todoItems.update((todos) => {
      return todos.map( todo => {
        if(todo.id === todoItem.id){
          return {...todo, completed: !todo.completed};
        }

        return todo;
      })
    })
  }
}
