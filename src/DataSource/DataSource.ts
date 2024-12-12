import Todo from "../Domain/Model/Todo";

export default abstract class DataSource {
    abstract getTodos(): Promise<Array<Todo>>;
    abstract createTodo(content: string): Promise<Todo>;
    abstract markAsCompleted(id: string): Promise<boolean>;
    abstract deleteTodo(id: string): Promise<boolean>
}