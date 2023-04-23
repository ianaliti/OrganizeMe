import { ITodo } from "../types/data"
import { Option } from "../types/types";
import { Dropdown } from "./Dropdown";

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id:number) => void;

}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo, editTodo} = props;

    // const onDelete = () => {
    //     console.log('')
    // } 

    // const onEdit = () => {
    //     console.log("")
    // }

    // const dropdownOptions: Array<Option> = [
    //     {
    //         value: 'Delete',
    //         onClick: onDelete,
    //         color: "red",
    //     },
    //     {
    //         value: 'Edit',
    //         onClick: onEdit,
    //         color: "blue",
    //     }
    // ]


    return <div>
        <li className={complete? 'todo-row completed' : 'todo-row'}>
            <label>
            <input type='checkbox' checked={complete} onChange={() => toggleTodo(id)} />
                {title}
            
            </label>
            <div>
                <button className="button-delete dropdown"
                onClick={() => removeTodo(id)}>
                    Delete</button>
                <button className="button-edit dropdown"
                onClick={() => editTodo(id)}>
                    Edit</button>
            </div>
            {/* <Dropdown options={dropdownOptions}/> */}
        </li>
    </div>
}

export {TodoItem}