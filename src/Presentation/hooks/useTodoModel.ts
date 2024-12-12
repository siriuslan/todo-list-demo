import { useMemo } from "react";

import LocalDataSourceImpl from "../../DataSource/LocalDataSourceImpl";
import TodoRepositoryImpl from "../../Domain/Repository/TodoRepositoryImpl";
import GetAllTodos from "../../Domain/UseCase/GetAllTodos";
import CreateTodo from "../../Domain/UseCase/CreateTodo";
import MarkTodoAsCompleted from "../../Domain/UseCase/MarkTodoAsCompleted";
import DeleteTodo from "../../Domain/UseCase/DeleteTodo";
import { useAppDispatch } from "../../redux/store";
import { addTodo, markGivenTodoAsComplete, removeTodo, updateTodos } from "../../redux/TodoSlice";

type useTodoModelType = {
    getTodos: () => Promise<void>,
    add: (content: string) => Promise<void>,
    remove: (id: string) => Promise<void>,
    markAsComplete: (id: string) => Promise<void>
}

export default function useTodoModel(): useTodoModelType {
    const dispatch = useAppDispatch()

    const dataSourceImpl = useMemo(() => new LocalDataSourceImpl(), []);
    const todoRepositoryImpl = useMemo(() => new TodoRepositoryImpl(dataSourceImpl), [dataSourceImpl]);

    const getAllTodos = useMemo(() => new GetAllTodos(todoRepositoryImpl), [todoRepositoryImpl]);
    const createTodo = useMemo(() => new CreateTodo(todoRepositoryImpl), [todoRepositoryImpl]);
    const markTodoAsComplete = useMemo(() => new MarkTodoAsCompleted(todoRepositoryImpl), [todoRepositoryImpl]);
    const deleteTodo = useMemo(() => new DeleteTodo(todoRepositoryImpl), [todoRepositoryImpl]);

    const getTodos = async (): Promise<void> => {
        const todoList = await getAllTodos.invoke();
        dispatch(updateTodos(todoList));
    }

    const add = async (content: string) => {
        const newTodo = await createTodo.invoke(content);
        dispatch(addTodo(newTodo));
    }

    const remove = async (id: string) => {
        const result = await deleteTodo.invoke(id);
        if (result) {
            dispatch(removeTodo(id));
        }
    }

    const markAsComplete = async (id: string) => {
        const result = await markTodoAsComplete.invoke(id);
        if (result) {
            dispatch(markGivenTodoAsComplete(id));
        }
    }

    return {
        getTodos,
        add,
        remove,
        markAsComplete
    }
}