import React from "react";
import { ITodo } from "../types/data"

interface ITodoButton extends ITodo{
    items?: ITodo[]
    removeTodo: (id: number) => void;
}

export const MyButton: React.FC<ITodoButton> = (props) => {
    const { removeTodo, id, title, complete } = props;
    return (
        <button className="button-delete" onClick={() => removeTodo(id)}>
            Delete
        </button>
    )
}