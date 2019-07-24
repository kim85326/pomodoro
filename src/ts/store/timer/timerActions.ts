import { TimerActionType, ITimerAction } from "./timerActionTypes";
import { PomodoroMode } from "../../constants/PomodoroMode";

export const setPomodoroModeAction = (mode: PomodoroMode): ITimerAction => ({
    type: TimerActionType.SET_POMODORO_MODE,
    mode: mode,
});

export const startTimerAction = (): ITimerAction => ({
    type: TimerActionType.START_TIMER,
});

export const stopTimerAction = (): ITimerAction => ({
    type: TimerActionType.STOP_TIMER,
});

export const setRemainSecondsAction = (
    remainSeconds: number,
): ITimerAction => ({
    type: TimerActionType.SET_REMAIN_SECONDS,
    remainSeconds: remainSeconds,
});
