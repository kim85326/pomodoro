import Todo from "../../class/Todo";
import { TodoActionType, ITodoAction } from "./todoActionTypes";

export const addTodoAction = (todo: Todo): ITodoAction => ({
    type: TodoActionType.ADD_TODO,
    todo: todo,
});

export const setNewTodoAction = (todo: Todo): ITodoAction => ({
    type: TodoActionType.SET_NEW_TODO,
    todo: todo,
});

export const setInProgressTodoIdAction = (id: number | null): ITodoAction => ({
    type: TodoActionType.SET_IN_PROGRESS_TODO_ID,
    id: id,
});

export const addInProgressTodoTomatoesAction = (): ITodoAction => ({
    type: TodoActionType.ADD_IN_PROGRESS_TODO_TOMATO,
});

export const toggleUndoTodoListAction = (): ITodoAction => ({
    type: TodoActionType.TOGGLE_UNDO_LIST,
});

export const toggleDoneTodoListAction = (): ITodoAction => ({
    type: TodoActionType.TOGGLE_DONE_LIST,
});

export const toggleTodoIsCompletedAction = (id: number): ITodoAction => ({
    type: TodoActionType.TOGGLE_TODO_IS_COMPLETED,
    id: id,
});
