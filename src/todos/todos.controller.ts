import { Controller, Get, Post, Req, Param, Paramtype, Body, Put } from '@nestjs/common';
import { Todo } from "./todo.dto";
import { TodoService } from "./todo.service";

@Controller('todos')
export class TodosController {

    constructor(private todo: TodoService) { }

    @Get()
    getAll(): any {
        return this.todo.getAll();
    }

    @Post()
    createTodo(@Body() body: Todo): string {
        console.log(body);
        return "This creates a todo!"
    }
    @Get(":id")
    getById(@Param("id") id: string): string {
        return `This returns ${id}`;
    }

    @Put(":id")
    updateTodo(@Param("id") id: string, @Body() todo: Todo): string {
        return `This creates a new todo ${JSON.stringify(todo)} with an id: ${id}`;
    }

}
