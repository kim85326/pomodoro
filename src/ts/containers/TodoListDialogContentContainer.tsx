import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import TodoListDialogContent from "../components/TodoListDialogContent";
import {
    toggleDoneTodoListAction,
    toggleUndoTodoListAction,
} from "../store/todo/todoActions";
import { AppState } from "../store/appReducer";

interface ITodoListDialogContentContainerProps
    extends ITodoListDialogContentStateProps {
    dispatch: Dispatch;
}

interface ITodoListDialogContentStateProps {
    isShowUndoTodoList: boolean;
    isShowDoneTodoList: boolean;
}

const mapStateToProps = (
    state: AppState,
): ITodoListDialogContentStateProps => ({
    isShowUndoTodoList: state.todoState.isShowUndoTodoList,
    isShowDoneTodoList: state.todoState.isShowDoneTodoList,
});

class TodoListDialogContentContainer extends React.Component<
    ITodoListDialogContentContainerProps
> {
    constructor(props: ITodoListDialogContentContainerProps) {
        super(props);
        this.toggleUndoList = this.toggleUndoList.bind(this);
        this.toggleDoneList = this.toggleDoneList.bind(this);
    }

    private toggleUndoList(): void {
        this.props.dispatch(toggleUndoTodoListAction());
    }

    private toggleDoneList(): void {
        this.props.dispatch(toggleDoneTodoListAction());
    }

    render() {
        return (
            <TodoListDialogContent
                isShowUndoTodoList={this.props.isShowUndoTodoList}
                isShowDoneTodoList={this.props.isShowDoneTodoList}
                toggleUndoList={this.toggleUndoList}
                toggleDoneList={this.toggleDoneList}
            />
        );
    }
}

const ConnectedTodoListDialogContent = connect(mapStateToProps)(
    TodoListDialogContentContainer,
);

export default ConnectedTodoListDialogContent;
