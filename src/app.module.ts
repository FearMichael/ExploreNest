import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodoService } from './todos/todo.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TodosController],
  providers: [AppService, TodoService],
})
export class AppModule { }
