import { Controller, Get, Post, Patch, Body, Param, Delete, Render, ParseIntPipe} from '@nestjs/common';
import { TodosService } from './todos.service';
import {Todo} from "../todo";
import {CreateTodoDto} from "./dto/create-todo.dto";
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  
  root() {
    return { message: 'Hello world!' };
  }

  @Get()
  @Render('index')
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number){
    return this.todosService.findOne(id);
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  update( @Param("id",ParseIntPipe) id:number,
  @Body("task") task: string,
  @Body("done") done: string
  ) {
    return this.todosService.update(id, task, done);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.remove(id);
  }
}
