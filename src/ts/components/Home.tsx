import * as React from "react";
import SidebarContainer from "../containers/SidebarContainer";
import NewTodoContainer from "../containers/NewTodoContainer";
import InProgressTodoContainer from "../containers/InProgressTodoContainer";
import TodoListContainer from "../containers/TodoListContainer";
import TimerContainer from "../containers/TimerContainer";
import { ShowTodoListMode } from "../constants/ShowTodoListMode";
import { PomodoroMode } from "../constants/PomodoroMode";

interface IHomeProps {
    mode: PomodoroMode;
}

class Home extends React.Component<IHomeProps> {
    constructor(props: IHomeProps) {
        super(props);
    }

    render() {
        return (
            <div
                className={`home ${
                    this.props.mode === PomodoroMode.BREAK ? "break-mode" : ""
                }`}
            >
                <SidebarContainer />
                <div className="home-main">
                    <div className="home-main-content">
                        <NewTodoContainer />
                        <InProgressTodoContainer />
                        <div className="home-main-content-bottom">
                            <TodoListContainer
                                showTodoListMode={
                                    // tslint:disable-next-line:max-line-length
                                    ShowTodoListMode.SHOW_FIRST_THREE_ITEMS_UNDO_AND_NOT_IN_PROGRESS_MODE
                                }
                            />
                        </div>
                    </div>
                </div>
                <TimerContainer />
            </div>
        );
    }
}

export default Home;
