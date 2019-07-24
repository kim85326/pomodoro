import * as React from "react";
import { ArrowRight } from "@material-ui/icons";
import RemainTimeContainer from "../containers/RemainTimeContainer";
import Todo from "../class/Todo";
import { PomodoroMode } from "../constants/PomodoroMode";

interface IDialogTimerProps {
    hideDialog: () => void;
    inProgressTodo: Todo | null;
    mode: PomodoroMode;
}

class DialogTimer extends React.Component<IDialogTimerProps> {
    constructor(props: IDialogTimerProps) {
        super(props);
    }

    private getDialogTimerContent() {
        if (this.props.inProgressTodo) {
            return (
                <>
                    <RemainTimeContainer />
                    <div className="dialog-timer-title">
                        {this.props.inProgressTodo.title}
                    </div>
                </>
            );
        }

        return <div className="no-in-progress-todo">沒有正在進行的項目</div>;
    }

    render() {
        return (
            <div
                className={`dialog-timer  ${
                    this.props.mode === PomodoroMode.BREAK ? "break-mode" : ""
                }`}
            >
                <div className="dialog-timer-semi-circle" />
                <a className="timer-wrapper" onClick={this.props.hideDialog}>
                    <div className="timer">
                        <div className="timer-border" />
                        <div className="timer-inner">
                            <div className="timer-button">
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                </a>
                {this.getDialogTimerContent()}
            </div>
        );
    }
}

export default DialogTimer;
