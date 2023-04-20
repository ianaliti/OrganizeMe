import { ITodo } from "../types/data"

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;

}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props;
    return <div>
        <label className={complete? 'todo-row completed' : 'todo-row'}>
        <input type='checkbox' checked={complete} onChange={() => toggleTodo(id)} />
            {title}
        <button className="button-delete"
        onClick={() => removeTodo(id)}>
            Delete</button>
        </label>
    </div>
}

export {TodoItem}