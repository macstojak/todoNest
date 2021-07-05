import { Global, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';

@Global()
@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
