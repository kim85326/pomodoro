import * as React from "react";
import Todo from "../class/Todo";
import { Check, PlayCircleOutline } from "@material-ui/icons";

interface ITodoItemProps {
    todo: Todo;
    toggleIsCompleted: () => void;
    setInProgressTodo: () => void;
}

class TodoItem extends React.Component<ITodoItemProps> {
    constructor(props: ITodoItemProps) {
        super(props);
    }

    private getOperations(): React.ReactNode {
        if (this.props.todo.isCompleted) {
            return (
                <div className="todo-item-tomatoes">
                    {this.getPomodoroDom()}
                </div>
            );
        }

        return (
            <a
                className="todo-item-play-button"
                onClick={this.props.setInProgressTodo}
            >
                <PlayCircleOutline />
            </a>
        );
    }

    private getPomodoroDom(): React.ReactNode {
        const pomodoro: React.ReactNode[] = [];

        for (let i = 0; i < this.props.todo.tomatoes; i = i + 1) {
            pomodoro.push(<div className="todo-item-tomato" />);
        }

        return pomodoro;
    }

    render() {
        return (
            <div className="todo-item">
                <div className="todo-item-title">
                    <input
                        type="checkbox"
                        className="checkbox-input todo-item-is-completed"
                        id={`todo-item-is-completed-input-${
                            this.props.todo.id
                        }`}
                        checked={this.props.todo.isCompleted}
                        onChange={this.props.toggleIsCompleted}
                    />
                    <label
                        className="checkbox-label"
                        htmlFor={`todo-item-is-completed-input-${
                            this.props.todo.id
                        }`}
                    >
                        <span className="mock-checkbox-input">
                            <Check />
                        </span>
                        <span className="checkbox-label-text">
                            {this.props.todo.title}
                        </span>
                    </label>
                </div>
                {this.getOperations()}
            </div>
        );
    }
}

export default TodoItem;
