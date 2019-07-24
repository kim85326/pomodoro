import * as React from "react";
import { ArrowDropUp, ArrowDropDown } from "@material-ui/icons";
import TodoListContainer from "../containers/TodoListContainer";
import { ShowTodoListMode } from "../constants/ShowTodoListMode";
import NewTodoContainer from "../containers/NewTodoContainer";

interface ITodoListDialogContentProps {
    toggleUndoList: () => void;
    toggleDoneList: () => void;
    isShowUndoTodoList: boolean;
    isShowDoneTodoList: boolean;
}

class TodoListDialogContent extends React.Component<
    ITodoListDialogContentProps
> {
    constructor(props: ITodoListDialogContentProps) {
        super(props);
    }

    private getUndoList(): React.ReactNode {
        if (this.props.isShowUndoTodoList) {
            return (
                <TodoListContainer
                    showTodoListMode={ShowTodoListMode.UNDO_MODE}
                />
            );
        }

        return null;
    }

    private getDoneList(): React.ReactNode {
        if (this.props.isShowDoneTodoList) {
            return (
                <TodoListContainer
                    showTodoListMode={ShowTodoListMode.DONE_MODE}
                />
            );
        }

        return null;
    }

    render() {
        return (
            <>
                <NewTodoContainer />
                <div className="dialog-block undo-todo-list">
                    <div className="dialog-block-title">
                        <div className="dialog-block-title-text">to-do</div>
                        <a
                            className="toggle-dialog-block-button"
                            onClick={this.props.toggleUndoList}
                        >
                            {this.props.isShowUndoTodoList ? (
                                <ArrowDropUp />
                            ) : (
                                <ArrowDropDown />
                            )}
                        </a>
                    </div>
                    <div className="dialog-block-content">
                        {this.getUndoList()}
                    </div>
                </div>
                <div className="dialog-block done-todo-list">
                    <div className="dialog-block-title">
                        <div className="dialog-block-title-text">done</div>
                        <a
                            className="toggle-dialog-block-button"
                            onClick={this.props.toggleDoneList}
                        >
                            {this.props.isShowDoneTodoList ? (
                                <ArrowDropUp />
                            ) : (
                                <ArrowDropDown />
                            )}
                        </a>
                    </div>
                    <div className="dialog-block-content">
                        {this.getDoneList()}
                    </div>
                </div>
            </>
        );
    }
}

export default TodoListDialogContent;
