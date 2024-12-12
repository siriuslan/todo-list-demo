import { ToDoContentTooShort } from "../Model/Errors";
import Todo from "../Model/Todo";
import TodoRepository from "../Repository/TodoRepository";

const MinToDoContentLength: number = 5;

export abstract class CreateTodoUseCase {
    abstract invoke(content: string): Promise<Todo>;
}

export default class CreateTodo extends CreateTodoUseCase {
    constructor(private _todoRepo: TodoRepository) {
        super();
    }

    invoke(content: string): Promise<Todo> {
        // some business logic
        if (content.length < MinToDoContentLength) {
            throw new ToDoContentTooShort(`Your todo should have at least ${MinToDoContentLength} characters.`)
        }

        return this._todoRepo.create(content);
    }
}