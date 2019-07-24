import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/appReducer";
import Todo from "../class/Todo";
import NewTodo from "../components/NewTodo";
import { addTodoAction, setNewTodoAction } from "../store/todo/todoActions";

interface INewTodoContainerProps extends INewTodoStateProps {
    dispatch: Dispatch;
}

interface INewTodoStateProps {
    newTodo: Todo;
}

const mapStateToProps = (state: AppState): INewTodoStateProps => ({
    newTodo: state.todoState.newTodo,
});

class NewTodoContainer extends React.Component<INewTodoContainerProps> {
    constructor(props: INewTodoContainerProps) {
        super(props);
        this.setNewTodo = this.setNewTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    private setNewTodo(todo: Todo) {
        this.props.dispatch(setNewTodoAction(todo));
    }

    private addTodo() {
        this.props.dispatch(addTodoAction(this.props.newTodo));
    }

    render() {
        return (
            <NewTodo
                todo={this.props.newTodo}
                setNewTodo={this.setNewTodo}
                addTodo={this.addTodo}
            />
        );
    }
}

const ConnectedNewTodo = connect(mapStateToProps)(NewTodoContainer);

export default ConnectedNewTodo;
