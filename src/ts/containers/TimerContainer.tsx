import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { cloneDeep } from "lodash";
import { AppState } from "../store/appReducer";
import {
    setRemainSecondsAction,
    startTimerAction,
    stopTimerAction,
    setPomodoroModeAction,
} from "../store/timer/timerActions";
import Timer from "../components/Timer";
import { PomodoroMode, PomodoroModeSeconds } from "../constants/PomodoroMode";
import Todo from "../class/Todo";
import { addInProgressTodoTomatoesAction } from "../store/todo/todoActions";

interface ITimerContainerProps extends ITimerStateProps {
    dispatch: Dispatch;
}

interface ITimerStateProps {
    isRunning: boolean;
    remainSeconds: number;
    mode: PomodoroMode;
    inProgressTodoId: number | null;
}

const mapStateToProps = (state: AppState): ITimerStateProps => ({
    isRunning: state.timerState.isRunning,
    remainSeconds: state.timerState.remainSeconds,
    mode: state.timerState.mode,
    inProgressTodoId: state.todoState.inProgressTodoId,
});

class TimerContainer extends React.Component<ITimerContainerProps> {
    private timer: number = 0;

    constructor(props: ITimerContainerProps) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.completeTimer = this.completeTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.skipTimer = this.skipTimer.bind(this);
    }

    componentWillReceiveProps(nextProps: ITimerContainerProps) {
        if (!this.props.isRunning && nextProps.isRunning) {
            this.timer = setInterval(this.countDown, 10);
        }

        if (this.props.isRunning && !nextProps.isRunning) {
            clearInterval(this.timer);
        }
    }

    componentWillUnMount() {
        this.stopTimer();
    }

    private countDown(): void {
        const remainSeconds = this.props.remainSeconds;

        if (remainSeconds <= 0) {
            this.completeTimer();
            return;
        }

        // 四捨五入至小數點第二位
        const nextRemainSeconds = Math.round((remainSeconds - 0.01) * 100) / 100;

        this.props.dispatch(setRemainSecondsAction(nextRemainSeconds));
    }

    private completeTimer(): void {
        this.stopTimer();

        if (this.props.mode === PomodoroMode.WORK) {
            this.completeWorkTimer();
        } else {
            this.completeBreakTimer();
        }
    }

    private completeWorkTimer(): void {
        this.props.dispatch(setPomodoroModeAction(PomodoroMode.BREAK));
        this.props.dispatch(setRemainSecondsAction(PomodoroModeSeconds.BREAK));
    }

    private completeBreakTimer(): void {
        this.props.dispatch(setPomodoroModeAction(PomodoroMode.WORK));
        this.props.dispatch(setRemainSecondsAction(PomodoroModeSeconds.WORK));
        this.props.dispatch(addInProgressTodoTomatoesAction());
    }

    private startTimer(): void {
        this.props.dispatch(startTimerAction());
    }

    private stopTimer(): void {
        this.props.dispatch(stopTimerAction());
    }

    private skipTimer(): void {
        this.stopTimer();
        this.props.dispatch(setPomodoroModeAction(PomodoroMode.WORK));
        this.props.dispatch(setRemainSecondsAction(PomodoroModeSeconds.WORK));
    }

    render() {
        if (!this.props.inProgressTodoId) {
            return null;
        }

        return (
            <Timer
                mode={this.props.mode}
                remainSeconds={this.props.remainSeconds}
                isRunning={this.props.isRunning}
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                skipTimer={this.skipTimer}
            />
        );
    }
}

const ConnectedTimer = connect(mapStateToProps)(TimerContainer);

export default ConnectedTimer;
