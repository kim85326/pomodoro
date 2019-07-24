import { cloneDeep } from "lodash";
import { AnyAction } from "redux";
import { ITimerAction, TimerActionType } from "./timerActionTypes";
import {
    PomodoroMode,
    PomodoroModeSeconds,
} from "../../constants/PomodoroMode";

export interface ITimerState {
    mode: PomodoroMode;
    isRunning: boolean;
    remainSeconds: number;
}

const initialTimerState: ITimerState = {
    mode: PomodoroMode.WORK,
    isRunning: false,
    remainSeconds: PomodoroModeSeconds.WORK,
};

export const timerReducer = (
    state = initialTimerState,
    action: AnyAction,
): ITimerState => {
    switch (action.type) {
    case TimerActionType.SET_POMODORO_MODE:
        return {
            ...state,
            mode: action.mode,
        };

    case TimerActionType.START_TIMER:
        return {
            ...state,
            isRunning: true,
        };

    case TimerActionType.STOP_TIMER:
        return {
            ...state,
            isRunning: false,
        };

    case TimerActionType.SET_REMAIN_SECONDS:
        return {
            ...state,
            remainSeconds: action.remainSeconds,
        };

    default:
        return state;
    }
};
