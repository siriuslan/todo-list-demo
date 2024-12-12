import TodoRepository from "../Repository/TodoRepository";

export abstract class DeleteTodoUseCase {
    abstract invoke(content: string): Promise<boolean>;
}

export default class DeleteTodo extends DeleteTodoUseCase {
    constructor(private _todoRepo: TodoRepository) {
        super();
    }

    invoke(id: string): Promise<boolean> {
        // some business logic

        return this._todoRepo.delete(id);
    }
}