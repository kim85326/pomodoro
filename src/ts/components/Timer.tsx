import * as React from "react";
import { PlayCircleFilled, PauseCircleFilled } from "@material-ui/icons";
import { PomodoroMode, PomodoroModeSeconds } from "../constants/PomodoroMode";

interface ITimerProps {
    remainSeconds: number;
    mode: PomodoroMode;
    isRunning: boolean;
    startTimer: () => void;
    stopTimer: () => void;
    skipTimer: () => void;
}

class Timer extends React.Component<ITimerProps> {
    constructor(props: ITimerProps) {
        super(props);
    }

    private getPlayOrStopButton(): React.ReactNode {
        if (this.props.isRunning) {
            return (
                <a className="timer-button" onClick={this.props.stopTimer}>
                    <PauseCircleFilled />
                </a>
            );
        }

        return (
            <a className="timer-button" onClick={this.props.startTimer}>
                <PlayCircleFilled />
            </a>
        );
    }

    render() {
        let pastTime: number;
        let deg: number;

        if (this.props.mode === PomodoroMode.WORK) {
            pastTime = PomodoroModeSeconds.WORK - this.props.remainSeconds;
            deg = (360 * pastTime) / PomodoroModeSeconds.WORK;
        } else {
            pastTime = PomodoroModeSeconds.WORK - this.props.remainSeconds;
            deg = (360 * pastTime) / PomodoroModeSeconds.BREAK;
        }

        return (
            <div
                className={`timer ${this.props.isRunning ? "is-running" : ""}`}
            >
                <div className="timer-remain-time">
                    <div
                        className="timer-remain-time-left"
                        style={{ opacity: deg > 180 ? 0 : 1 }}
                    />
                    <div
                        className="timer-remain-time-rotate"
                        style={{ transform: `rotate(${deg}deg)` }}
                    />
                    <div
                        className="timer-remain-time-right"
                        style={{ opacity: deg <= 180 ? 0 : 1 }}
                    />
                </div>
                <div className="timer-border" />
                <div className="timer-inner">
                    {this.getPlayOrStopButton()}
                    <a
                        className="timer-skip-button"
                        onClick={this.props.skipTimer}
                    />
                </div>
            </div>
        );
    }
}

export default Timer;
