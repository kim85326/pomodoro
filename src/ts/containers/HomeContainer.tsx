import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";
import {
    setDialogModeAction,
    showDialogAction,
} from "../store/dialog/dialogActions";
import { DialogMode } from "../constants/DialogMode";
import { AppState } from "../store/appReducer";
import { PomodoroMode } from "../constants/PomodoroMode";

interface IHomeContainerProps extends IHomeStateProps {
    dispatch: Dispatch;
}

interface IHomeStateProps {
    mode: PomodoroMode;
}

const mapStateToProps = (state: AppState): IHomeStateProps => ({
    mode: state.timerState.mode,
});

class HomeContainer extends React.Component<IHomeContainerProps> {
    constructor(props: IHomeContainerProps) {
        super(props);
    }

    render() {
        return <Home mode={this.props.mode} />;
    }
}

const ConnectedHome = connect(mapStateToProps)(HomeContainer);

export default ConnectedHome;
