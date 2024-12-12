import DataSource from "../../DataSource/DataSource";
import Todo from "../Model/Todo";
import TodoRepository from "./TodoRepository";

export default class TodoRepositoryImpl extends TodoRepository {
    constructor(private _source: DataSource) {
        super();
    }

    getList(): Promise<Array<Todo>> {
        return this._source.getTodos();
    }

    create(content: string): Promise<Todo> {
        return this._source.createTodo(content);
    }

    markAsCompleted(id: string): Promise<boolean> {
        return this._source.markAsCompleted(id);
    }

    delete(id: string): Promise<boolean> {
        return this._source.deleteTodo(id);
    }

}