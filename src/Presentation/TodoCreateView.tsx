import { Button, TextField } from "@mui/material";

import useTodoModel from "./hooks/useTodoModel";
import { useState } from "react";

const TodoCreateView = (): React.ReactElement => {
    const [value, updateValue] = useState<string>("");
    const { add } = useTodoModel();

    return (
        <>
            <TextField
              id="add-todo-input"
              label="Outlined"
              variant="outlined"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => updateValue(e.target.value)}
              value={value}
            />
            <Button
                id="add-todo-button"
                onClick={() => {
                    add(value);
                    updateValue("");
                }}
                variant="contained"
            >
                Add
            </Button>
        </>
    );
}

export default TodoCreateView;
