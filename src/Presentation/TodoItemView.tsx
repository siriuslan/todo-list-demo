import React from "react";

import Todo from "../Domain/Model/Todo";
import { Button, Checkbox, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import useTodoModel from "./hooks/useTodoModel";

interface TodoItemViewProp {
    item: Todo
}

const TodoItemView = (props: TodoItemViewProp): React.ReactElement => {
    const { markAsComplete, remove } = useTodoModel();

    return (
        <ListItem>
            <ListItemIcon>
              <Checkbox
                checked={props.item.isCompleted}
                onChange={() => markAsComplete(props.item.id)}
                sx={{ marginLeft: "-20px" }}
              />
            </ListItemIcon>
            <ListItemText primary={props.item.content} sx={{ width: "500px" }}/>
            <Button onClick={() => remove(props.item.id)} variant="outlined" sx={{ marginLeft: "20px "}}>remove</Button>
        </ListItem>
    );
}

export default TodoItemView;
