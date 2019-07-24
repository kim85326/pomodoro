import * as React from "react";
import { cloneDeep } from "lodash";
import { Add } from "@material-ui/icons";
import Todo from "../class/Todo";

interface INewTodoProps {
    todo: Todo;
    setNewTodo: (todo: Todo) => void;
    addTodo: () => void;
}

class NewTodo extends React.Component<INewTodoProps> {
    constructor(props: INewTodoProps) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    private handleInputChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        const todo: Todo = cloneDeep(this.props.todo);
        todo.title = event.target.value;
        this.props.setNewTodo(todo);
    }

    private handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.key === "Enter") {
            this.props.addTodo();
        }
    }

    render() {
        return (
            <div className="new-todo">
                <input
                    type="text"
                    className="new-todo-input"
                    placeholder="add a new mission…"
                    value={this.props.todo.title}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                />
                <a className="new-todo-button">
                    <Add />
                </a>
            </div>
        );
    }
}

export default NewTodo;
