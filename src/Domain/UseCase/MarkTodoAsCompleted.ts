import TodoRepository from "../Repository/TodoRepository";

export abstract class MarkTodoAsCompletedUseCase {
    abstract invoke(content: string): Promise<boolean>;
}

export default class MarkTodoAsCompleted extends MarkTodoAsCompletedUseCase {
    constructor(private _todoRepo: TodoRepository) {
        super();
    }

    invoke(id: string): Promise<boolean> {
        // some business logic

        return this._todoRepo.markAsCompleted(id);
    }
}