import Todo from "../../class/Todo";
import { ActionPrefix } from "../../constants/ActionPrefix";

const prefix = ActionPrefix.TODO;
export const TodoActionType = {
    ADD_TODO: `${prefix}_ADD_TODO`,
    SET_NEW_TODO: `${prefix}_SET_NEW_TODO`,
    SET_IN_PROGRESS_TODO_ID: `${prefix}_SET_IN_PROGRESS_TODO_ID`,
    ADD_IN_PROGRESS_TODO_TOMATO: `${prefix}_ADD_IN_PROGRESS_TODO_TOMATO`,
    TOGGLE_UNDO_LIST: `${prefix}_TOGGLE_UNDO_LIST`,
    TOGGLE_DONE_LIST: `${prefix}_TOGGLE_DONE_LIST`,
    TOGGLE_TODO_IS_COMPLETED: `${prefix}_TOGGLE_TODO_IS_COMPLETED`,
};

export interface IAddTodoAction {
    type: typeof TodoActionType.ADD_TODO;
    todo: Todo;
}

export interface ISetNewTodoAction {
    type: typeof TodoActionType.SET_NEW_TODO;
    todo: Todo;
}

export interface ISetInProgressTodoIdAction {
    type: typeof TodoActionType.SET_IN_PROGRESS_TODO_ID;
    id: number | null;
}

export interface IAddInProgressTodoTomatoAction {
    type: typeof TodoActionType.ADD_IN_PROGRESS_TODO_TOMATO;
}

export interface IToggleUndoTodoListAction {
    type: typeof TodoActionType.TOGGLE_UNDO_LIST;
}

export interface IToggleDoneTodoListAction {
    type: typeof TodoActionType.TOGGLE_DONE_LIST;
}

export interface IToggleTodoIsCompletedAction {
    type: typeof TodoActionType.TOGGLE_DONE_LIST;
    id: number;
}

export type ITodoAction =
    | IAddTodoAction
    | ISetNewTodoAction
    | ISetInProgressTodoIdAction
    | IAddInProgressTodoTomatoAction
    | IToggleUndoTodoListAction
    | IToggleDoneTodoListAction
    | IToggleTodoIsCompletedAction;
