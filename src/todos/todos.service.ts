import { Injectable } from '@nestjs/common';
import {Todo} from "../todo";

@Injectable()
export class TodosService {
  todos: Todo[] = [];
  
  create(newTodo:Todo) {
    const id = Date.now();
    this.todos.push({id,...newTodo});
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.filter(obj=>obj.id===id);
  }

  update(id: number, task, done) {
    let index = this.todos.findIndex(obj=>obj.id===id);
    this.todos[index]={id, task, done};
  }

  remove(id: number) {
    this.todos = this.todos.filter(obj=>obj.id!==id);
  }
}
