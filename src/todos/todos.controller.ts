import { Controller, Get, Post, Patch, Body, Param, Delete, Render, ParseIntPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { TodosService } from './todos.service';
import {Todo} from "../todo";

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number){
    return this.todosService.findOne(id);
  }

  @Post()
  async create(@Body() todo:Todo) {
    this.todosService.create(todo);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  update(@Body() todo:Todo, @Param("id",ParseIntPipe) id:number) {
    return this.todosService.update(todo, id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.remove(id);
  }
}
