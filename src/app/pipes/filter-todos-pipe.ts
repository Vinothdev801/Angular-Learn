import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../type/Todo';

@Pipe({
  name: 'filterTodos', standalone: true,
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: Todo[], search: string): Todo[] {
    if(!search){
      return value;
    }

    const text = search.toLowerCase();

    return value.filter(todo => {
      return todo.title.toLowerCase().includes(text)
    })
  }
}
