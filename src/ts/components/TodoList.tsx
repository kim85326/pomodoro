import * as React from "react";
import Todo from "../class/Todo";
import { ShowTodoListMode } from "../constants/ShowTodoListMode";
import TodoItemContainer from "../containers/TodoItemContainer";

interface ITodoListProps {
    showTodoListMode: ShowTodoListMode;
    todoList: Todo[];
    showAllTodoList: () => void;
}

class TodoList extends React.Component<ITodoListProps> {
    constructor(props: ITodoListProps) {
        super(props);
    }

    private getShowFirstThreeItemsUndoAndNotInProgressListDom() {
        if (this.props.todoList.length === 0) {
            return <div className="no-more">no more to show</div>;
        }

        return (
            <>
                {this.getListDom()}
                <a className="more" onClick={this.props.showAllTodoList}>
                    More
                </a>
            </>
        );
    }

    private getListDom(): React.ReactNode {
        return <div className="todo-list">{this.getItemsDom()}</div>;
    }

    private getItemsDom(): React.ReactNode {
        return this.props.todoList.map((todo: Todo) => (
            <>
                <TodoItemContainer todo={todo} key={todo.id} />
                <hr />
            </>
        ));
    }

    render() {
        if (
            this.props.showTodoListMode ===
            ShowTodoListMode.SHOW_FIRST_THREE_ITEMS_UNDO_AND_NOT_IN_PROGRESS_MODE
        ) {
            return this.getShowFirstThreeItemsUndoAndNotInProgressListDom();
        }

        return this.getListDom();
    }
}

export default TodoList;
