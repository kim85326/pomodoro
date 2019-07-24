import * as React from "react";
import { Dispatch } from "redux";
import Todo from "../class/Todo";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { AppState } from "../store/appReducer";
import { ShowTodoListMode } from "../constants/ShowTodoListMode";
import {
    showDialogAction,
    setDialogModeAction,
} from "../store/dialog/dialogActions";
import { DialogMode } from "../constants/DialogMode";

interface ITodoListContainerProps extends ITodoListStateProps {
    dispatch: Dispatch;
    showTodoListMode: ShowTodoListMode;
}

interface ITodoListStateProps {
    todoList: Todo[];
    inProgressTodoId: number | null;
}

const mapStateToProps = (state: AppState): ITodoListStateProps => ({
    todoList: state.todoState.todoList,
    inProgressTodoId: state.todoState.inProgressTodoId,
});

class TodoListContainer extends React.Component<ITodoListContainerProps> {
    constructor(props: ITodoListContainerProps) {
        super(props);
        this.showAllTodoList = this.showAllTodoList.bind(this);
    }

    private getFilterTodoList(): Todo[] {
        const todoList = this.props.todoList;

        if (
            this.props.showTodoListMode ===
            ShowTodoListMode.SHOW_FIRST_THREE_ITEMS_UNDO_AND_NOT_IN_PROGRESS_MODE
        ) {
            return todoList
                .filter((todo: Todo) => !todo.isCompleted)
                .filter((todo: Todo) => {
                    if (this.props.inProgressTodoId) {
                        return todo.id !== this.props.inProgressTodoId;
                    }
                    return true;
                })
                .slice(0, 3);
        }

        if (this.props.showTodoListMode === ShowTodoListMode.UNDO_MODE) {
            return todoList.filter((todo: Todo) => !todo.isCompleted);
        }

        if (this.props.showTodoListMode === ShowTodoListMode.DONE_MODE) {
            return todoList.filter((todo: Todo) => todo.isCompleted);
        }

        return todoList;
    }

    private showAllTodoList(): void {
        this.props.dispatch(showDialogAction());
        this.props.dispatch(setDialogModeAction(DialogMode.TODO_LIST));
    }

    render() {
        return (
            <TodoList
                showTodoListMode={this.props.showTodoListMode}
                todoList={this.getFilterTodoList()}
                showAllTodoList={this.showAllTodoList}
            />
        );
    }
}

const ConnectedTodoList = connect(mapStateToProps)(TodoListContainer);

export default ConnectedTodoList;
