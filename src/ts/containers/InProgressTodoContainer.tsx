import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/appReducer";
import Todo from "../class/Todo";
import InProgressTodo from "../components/InProgressTodo";
import {
    setInProgressTodoIdAction,
    toggleTodoIsCompletedAction,
} from "../store/todo/todoActions";
import {
    stopTimerAction,
    setPomodoroModeAction,
    setRemainSecondsAction,
} from "../store/timer/timerActions";
import { PomodoroMode, PomodoroModeSeconds } from "../constants/PomodoroMode";

interface IInProgressTodoContainerProps extends IInProgressTodoStateProps {
    dispatch: Dispatch;
}

interface IInProgressTodoStateProps {
    inProgressTodoId: number | null;
    todos: Todo[];
}

const mapStateToProps = (state: AppState): IInProgressTodoStateProps => ({
    inProgressTodoId: state.todoState.inProgressTodoId,
    todos: state.todoState.todoList,
});

class InProgressTodoContainer extends React.Component<
    IInProgressTodoContainerProps
> {
    constructor(props: IInProgressTodoContainerProps) {
        super(props);
        this.completeTodo = this.completeTodo.bind(this);
    }

    private completeTodo(): void {
        if (this.props.inProgressTodoId) {
            this.props.dispatch(
                toggleTodoIsCompletedAction(this.props.inProgressTodoId),
            );
            this.setNewInProgressTodo();
        }
    }

    private setNewInProgressTodo(): void {
        if (this.props.inProgressTodoId) {
            const newTodo = this.props.todos
                .filter((todo: Todo) => {
                    if (this.props.inProgressTodoId) {
                        return todo.id !== this.props.inProgressTodoId;
                    }
                    return true;
                })
                .find((todo: Todo) => !todo.isCompleted);

            if (newTodo) {
                this.props.dispatch(setInProgressTodoIdAction(newTodo.id));
                this.props.dispatch(stopTimerAction());
                this.props.dispatch(setPomodoroModeAction(PomodoroMode.WORK));
                this.props.dispatch(
                    setRemainSecondsAction(PomodoroModeSeconds.WORK),
                );
            } else {
                this.props.dispatch(setInProgressTodoIdAction(null));
            }
        }
    }

    render() {
        if (!this.props.inProgressTodoId) {
            return (
                <div className="in-progress-todo">
                    <div className="no-in-progress-todo">沒有進行中的項目</div>
                </div>
            );
        }

        const todo = this.props.todos.find(
            (todo: Todo) => todo.id === this.props.inProgressTodoId,
        );

        return <InProgressTodo todo={todo!} completeTodo={this.completeTodo} />;
    }
}

const ConnectedInProgressTodo = connect(mapStateToProps)(
    InProgressTodoContainer,
);

export default ConnectedInProgressTodo;
