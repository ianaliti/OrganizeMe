import { useState } from "react";
import { ITodo } from "../types/data"
import { Option } from "../types/types";
import { Dropdown } from "./Dropdown";

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number, title: string) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo, editTodo } = props;
    const [editingText, setEditingText] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const saveTodo = (): void => {
        setIsEditing(false)
        editTodo(id, editingText)
    }

    return <div>
        <li className={complete ? 'todo-row completed' : 'todo-row'}>
            <div>
                <input type='checkbox' checked={complete} onChange={() => toggleTodo(id)} />
                {
                    isEditing ?
                        (<input
                            type='text'
                            onChange={(e) => setEditingText(e.target.value)}
                            value={editingText}
                        />)
                        :
                        (<label>{title}</label>)
                }
            </div>
            <div>
                {
                    isEditing ? (
                        <div>
                            <button className="button-cancel dropdown"
                                onClick={() => setIsEditing(false)}>
                                Cancel</button>
                            <button className="button-save dropdown"
                                onClick={() => saveTodo() }>
                                Save</button>
                        </div>
                    ) : (
                        <div>
                            <button className="button-delete dropdown"
                                onClick={() => removeTodo(id)}>
                                Delete</button>
                            <button className="button-edit dropdown"
                                onClick={() => setIsEditing(true)}>
                                Edit</button>
                        </div>
                    )
                }
            </div>
        </li>
    </div>
}

export { TodoItem }