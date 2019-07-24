import { cloneDeep } from "lodash";
import Todo from "../../class/Todo";
import { TodoActionType } from "./todoActionTypes";
import { AnyAction } from "redux";
import { getTodoId } from "../../helpers/idGenerator";
import InProgressTodo from "../../components/InProgressTodo";

export interface ITodoState {
    todoList: Todo[];
    newTodo: Todo;
    inProgressTodoId: number | null;
    isShowUndoTodoList: boolean;
    isShowDoneTodoList: boolean;
}

const defaultTodoList = [
    {
        id: getTodoId.next().value,
        title: "寫作業",
        isCompleted: false,
        tomatoes: 3,
    },
    {
        id: getTodoId.next().value,
        title: "買菜菜",
        isCompleted: true,
        tomatoes: 4,
    },
    {
        id: getTodoId.next().value,
        title: "吃飯飯",
        isCompleted: true,
        tomatoes: 2,
    },
    {
        id: getTodoId.next().value,
        title: "洗澡澡",
        isCompleted: false,
        tomatoes: 1,
    },
    {
        id: getTodoId.next().value,
        title: "刷牙牙",
        isCompleted: false,
        tomatoes: 0,
    },
    {
        id: getTodoId.next().value,
        title: "睡覺覺",
        isCompleted: false,
        tomatoes: 0,
    },
];

const initialTodoState: ITodoState = {
    todoList: defaultTodoList,
    newTodo: {
        id: getTodoId.next().value,
        title: "",
        isCompleted: false,
        tomatoes: 0,
    },
    inProgressTodoId: 1,
    isShowUndoTodoList: true,
    isShowDoneTodoList: true,
};

export const todoReducer = (
    state = initialTodoState,
    action: AnyAction,
): ITodoState => {
    const newTodoList = cloneDeep(state.todoList);
    let index: number;

    switch (action.type) {
    case TodoActionType.ADD_TODO:
        newTodoList.push(action.todo);
        return {
            ...state,
            todoList: newTodoList,
            newTodo: {
                id: getTodoId.next().value,
                title: "",
                isCompleted: false,
                tomatoes: 0,
            },
        };

    case TodoActionType.SET_NEW_TODO:
        return {
            ...state,
            newTodo: cloneDeep(action.todo),
        };

    case TodoActionType.SET_IN_PROGRESS_TODO_ID:
        const inProgressTodoId = null;

        if (action.id) {
            const inProgressTodoId =
                    newTodoList.find((todo: Todo) => todo.id === action.id) ||
                    null;
        }

        return {
            ...state,
            inProgressTodoId: action.id,
        };

    case TodoActionType.ADD_IN_PROGRESS_TODO_TOMATO:
        index = newTodoList.findIndex(
                (todo: Todo) => todo.id === state.inProgressTodoId,
            );
        newTodoList[index].tomatoes = newTodoList[index].tomatoes + 1;
        return {
            ...state,
            todoList: newTodoList,
        };

    case TodoActionType.TOGGLE_UNDO_LIST:
        return {
            ...state,
            isShowUndoTodoList: !state.isShowUndoTodoList,
        };

    case TodoActionType.TOGGLE_DONE_LIST:
        return {
            ...state,
            isShowDoneTodoList: !state.isShowDoneTodoList,
        };

    case TodoActionType.TOGGLE_TODO_IS_COMPLETED:
        index = newTodoList.findIndex(
                (todo: Todo) => todo.id === action.id,
            );
        newTodoList[index].isCompleted = !newTodoList[index].isCompleted;
        return {
            ...state,
            todoList: newTodoList,
        };

    default:
        return state;
    }
};
