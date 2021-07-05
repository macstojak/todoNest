import { Injectable, Req, Res } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {Todo} from "../todo";

@Injectable()
export class TodosService {
  todos: Todo[] = [];
  
  create(newTodo: Todo) {
    const id = Date.now();
    this.todos.push({id,...newTodo});
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.filter(obj=>obj.id===id);
  }

  update(todo:Todo, id: number) {
    
    let index = this.todos.findIndex(obj=>obj.id===id);
    this.todos[index]=todo;
  }

  remove(id: number) {
    this.todos = this.todos.filter(obj=>obj.id!==id);
  }
}
