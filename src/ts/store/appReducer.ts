import { Reducer, combineReducers } from "redux";
import { ITodoState, todoReducer } from "./todo/todoReducer";
import { IDialogState, dialogReducer } from "./dialog/dialogReducer";
import { ITimerState, timerReducer } from "./timer/timerReducer";

export interface AppState {
    dialogState: IDialogState;
    todoState: ITodoState;
    timerState: ITimerState;
}

const appReducer: Reducer<AppState> = combineReducers<AppState>({
    dialogState: dialogReducer,
    todoState: todoReducer,
    timerState: timerReducer,
});

export default appReducer;
