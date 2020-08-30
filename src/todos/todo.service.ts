import { Injectable } from '@nestjs/common';
import { Todo } from "./todo.dto";
import { HttpService } from "@nestjs/common/http"
import { Observable } from 'rxjs';
import { take, map } from "rxjs/operators";

@Injectable()
export class TodoService {

    private baseUrl = "https://jsonplaceholder.typicode.com/todos";

    constructor(private http: HttpService) { }

    private readonly todos: Todo[] = [];

    create(todo: Todo): Observable<any> {
        return this.http.post(this.baseUrl, todo);
    }

    getAll(): Observable<any> {
        return this.http.get(this.baseUrl).pipe(take(1), map((res) => res.data));
    }

}
