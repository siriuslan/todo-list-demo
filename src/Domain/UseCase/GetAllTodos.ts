import Todo from "../Model/Todo";
import TodoRepository from "../Repository/TodoRepository";

export abstract class GetAllTodosUseCase {
    abstract invoke(): Promise<Array<Todo>>;
}

export default class GetAllTodos extends GetAllTodosUseCase {
    constructor(private _todoRepo: TodoRepository) {
        super();
    }

    invoke(): Promise<Array<Todo>> {
        return this._todoRepo.getList();
    }
}