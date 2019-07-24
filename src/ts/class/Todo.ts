import { getTodoId } from "../helpers/idGenerator";

interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
    tomatoes: number;
}

export default Todo;
