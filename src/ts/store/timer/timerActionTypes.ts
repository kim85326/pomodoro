import { ActionPrefix } from "../../constants/ActionPrefix";
import { PomodoroMode } from "../../constants/PomodoroMode";

const prefix = ActionPrefix.TIMER;
export const TimerActionType = {
    SET_POMODORO_MODE: `${prefix}_SET_POMODORO_MODE`,
    START_TIMER: `${prefix}_START_TIMER`,
    STOP_TIMER: `${prefix}_STOP_TIMER`,
    SET_REMAIN_SECONDS: `${prefix}_SET_REMAIN_SECONDS`,
};

export interface ISetPomodoroModeAction {
    type: typeof TimerActionType.SET_POMODORO_MODE;
    mode: PomodoroMode;
}

export interface IStartTimerAction {
    type: typeof TimerActionType.START_TIMER;
}

export interface IStopTimerAction {
    type: typeof TimerActionType.STOP_TIMER;
}

export interface ISetRemainSecondsAction {
    type: typeof TimerActionType.SET_REMAIN_SECONDS;
    remainSeconds: number;
}

export type ITimerAction =
    | ISetPomodoroModeAction
    | IStartTimerAction
    | IStopTimerAction
    | ISetRemainSecondsAction;
