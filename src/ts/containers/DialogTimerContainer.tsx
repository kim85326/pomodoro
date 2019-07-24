import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { hideDialogAction } from "../store/dialog/dialogActions";
import DialogTimer from "../components/DialogTimer";
import { AppState } from "../store/appReducer";
import Todo from "../class/Todo";
import { PomodoroMode } from "../constants/PomodoroMode";

interface IDialogTimerContainerProps extends IDialogTimerStateProps {
    dispatch: Dispatch;
}

interface IDialogTimerStateProps {
    inProgressTodoId: number | null;
    todos: Todo[];
    mode: PomodoroMode;
}

const mapStateToProps = (state: AppState): IDialogTimerStateProps => ({
    inProgressTodoId: state.todoState.inProgressTodoId,
    todos: state.todoState.todoList,
    mode: state.timerState.mode,
});

class DialogTimerContainer extends React.Component<IDialogTimerContainerProps> {
    constructor(props: IDialogTimerContainerProps) {
        super(props);
        this.hideDialog = this.hideDialog.bind(this);
    }

    private hideDialog(): void {
        this.props.dispatch(hideDialogAction());
    }

    private getInProgressTodo(): Todo | null {
        if (!this.props.inProgressTodoId) {
            return null;
        }

        const todo = this.props.todos.find(
            (todo: Todo) => todo.id === this.props.inProgressTodoId!,
        );

        return todo || null;
    }

    render() {
        return (
            <DialogTimer
                hideDialog={this.hideDialog}
                inProgressTodo={this.getInProgressTodo()}
                mode={this.props.mode}
            />
        );
    }
}

const ConnectedDialogTimer = connect(mapStateToProps)(DialogTimerContainer);

export default ConnectedDialogTimer;
