import { List } from "@mui/material";

import TodoItemView from "./TodoItemView";
import { useAppSelector } from "../redux/store";

const TodoListView = () => {
    const todos = useAppSelector(state => state.todo.todos);

    return (
        <List>
            {todos.map((todoItem, index) => <TodoItemView item={todoItem} key={index} />)}
        </List>
    );
}

export default TodoListView;
