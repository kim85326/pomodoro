import * as React from "react";
import { Dispatch } from "redux";
import Todo from "../class/Todo";
import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import {
    toggleTodoIsCompletedAction,
    setInProgressTodoIdAction,
} from "../store/todo/todoActions";
import {
    stopTimerAction,
    setPomodoroModeAction,
    setRemainSecondsAction,
} from "../store/timer/timerActions";
import { PomodoroMode, PomodoroModeSeconds } from "../constants/PomodoroMode";
import { hideDialogAction } from "../store/dialog/dialogActions";
import { AppState } from "../store/appReducer";

interface ITodoItemContainerProps extends ITodoItemStateProps {
    dispatch: Dispatch;
    todo: Todo;
}

interface ITodoItemStateProps {
    inProgressTodoId: number | null;
}

const mapStateToProps = (state: AppState): ITodoItemStateProps => ({
    inProgressTodoId: state.todoState.inProgressTodoId,
});

class TodoItemContainer extends React.Component<ITodoItemContainerProps> {
    constructor(props: ITodoItemContainerProps) {
        super(props);
        this.toggleIsCompleted = this.toggleIsCompleted.bind(this);
        this.setInProgressTodo = this.setInProgressTodo.bind(this);
    }

    private toggleIsCompleted(): void {
        this.props.dispatch(toggleTodoIsCompletedAction(this.props.todo.id));
        if (this.props.inProgressTodoId === this.props.todo.id) {
            this.props.dispatch(setInProgressTodoIdAction(null));
            this.props.dispatch(stopTimerAction());
        }
    }

    private setInProgressTodo(): void {
        this.props.dispatch(setInProgressTodoIdAction(this.props.todo.id));
        this.props.dispatch(stopTimerAction());
        this.props.dispatch(setPomodoroModeAction(PomodoroMode.WORK));
        this.props.dispatch(setRemainSecondsAction(PomodoroModeSeconds.WORK));
        this.props.dispatch(hideDialogAction());
    }

    render() {
        return (
            <TodoItem
                todo={this.props.todo}
                toggleIsCompleted={this.toggleIsCompleted}
                setInProgressTodo={this.setInProgressTodo}
            />
        );
    }
}

const ConnectedTodoItem = connect(mapStateToProps)(TodoItemContainer);

export default ConnectedTodoItem;
