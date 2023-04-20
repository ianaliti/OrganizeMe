import { Console } from "console";
import React from "react";
import { useState } from "react";

interface TodoFormProps {
    addTodo: AddTodo;
} 

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState<string>('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTodo(e.target.value)
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') addTodo('');
    }
    
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        addTodo(newTodo) ;
        setNewTodo('');
    }

    return (
        <form className="todo-form">
            <input type='text' value={newTodo} className='todo-input' placeholder='ToDo Name' onChange={handleChange}/>
            <button type="submit" className="todo-button" onClick={handleSubmit}>
                Add +
            </button>
        </form>
    )
}