import { type } from "os";

type AddTodo = (newTodo: string) => void;

type Todo = {
    text: string;
    complete: boolean
}

type Option = {
    value: string;
    onClick: () => void;
    color?: strings
}

