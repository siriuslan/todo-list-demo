import Todo from "../Model/Todo";

export default abstract class TodoRepository {
    abstract getList(): Promise<Array<Todo>>;
    abstract create(content: string): Promise<Todo>;
    abstract markAsCompleted(id: string): Promise<boolean>;
    abstract delete(id: string): Promise<boolean>
}