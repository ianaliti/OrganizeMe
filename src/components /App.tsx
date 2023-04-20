import { useState, useEffect, useRef } from "react"
import { TodoList } from "./TodoList";
import { ITodo } from "../types/data"
import { TodoForm } from "./TodoForm";
import './App.css'


const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo: AddTodo = newTodo => {
        if (newTodo !== '') {
            setTodos([...todos, {
                id: Date.now(),
                title: newTodo,
                complete: false,
            }])
        }    
    }
    
    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
    },[])

    return (
        <div className="todo-app">
            <h1>ToDo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList items={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
)}

export {App}