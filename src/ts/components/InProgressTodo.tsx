import * as React from "react";
import { Check } from "@material-ui/icons";
import Todo from "../class/Todo";
import RemainTimeContainer from "../containers/RemainTimeContainer";

interface IInProgressTodoProps {
    todo: Todo;
    completeTodo: () => void;
}

class InProgressTodo extends React.Component<IInProgressTodoProps> {
    constructor(props: IInProgressTodoProps) {
        super(props);
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
            <div className="in-progress-todo">
                <div className="todo-item">
                    <input
                        type="checkbox"
                        className="checkbox-input"
                        id={`in-progress-todo-is-completed-input-${
                            this.props.todo.id
                        }`}
                        checked={this.props.todo.isCompleted}
                        onChange={this.props.completeTodo}
                    />
                    <label
                        className="checkbox-label"
                        htmlFor={`in-progress-todo-is-completed-input-${
                            this.props.todo.id
                        }`}
                    >
                        <span className="mock-checkbox-input">
                            <Check />
                        </span>
                        <div className="in-progress-todo-title">
                            <div className="checkbox-label-text">
                                {this.props.todo.title}
                            </div>
                            <div className="todo-item-tomatoes">
                                {this.getPomodoroDom()}
                                {/* TODO: 新增正在進行的番茄 */}
                                {/* tslint:disable-next-line:max-line-length */}
                                {/* <div className="todo-item-tomato todo-item-tomato-running" /> */}
                            </div>
                        </div>
                    </label>
                </div>
                <RemainTimeContainer />
            </div>
        );
    }
}

export default InProgressTodo;
