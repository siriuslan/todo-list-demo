import { v4 as uuidv4 } from 'uuid';

import Todo from "../Domain/Model/Todo";
import DataSource from "./DataSource";

export default class LocalDataSourceImpl extends DataSource {

    getTodos(): Promise<Array<Todo>> {
        return Promise.resolve(Array.from([]));
    }
    createTodo(content: string): Promise<Todo> {
        const newTodo = new Todo(uuidv4(), content, false);
        return Promise.resolve(newTodo);
    }

    
    markAsCompleted(id: string): Promise<boolean> {
        console.log(`mark todo item which id is ${id} as completed.`);
        return Promise.resolve(true);
    }
    
    deleteTodo(id: string): Promise<boolean> {
        console.log(`delete todo item which id is ${id}.`);
        return Promise.resolve(true);
    }
}
