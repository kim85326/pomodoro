import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/appReducer";
import { SidebarMode } from "../constants/SidebarMode";
import Sidebar from "../components/Sidebar";
import {
    setDialogModeAction,
    showDialogAction,
    hideDialogAction,
} from "../store/dialog/dialogActions";
import { DialogMode } from "../constants/DialogMode";

interface ISidebarContainerProps extends ISidebarStateProps {
    dispatch: Dispatch;
}

interface ISidebarStateProps {
    isShowDialog: boolean;
}

const mapStateToProps = (state: AppState): ISidebarStateProps => ({
    isShowDialog: state.dialogState.isShow,
});

class SidebarContainer extends React.Component<ISidebarContainerProps> {
    constructor(props: ISidebarContainerProps) {
        super(props);
        this.showTodoList = this.showTodoList.bind(this);
        this.showAnalytics = this.showAnalytics.bind(this);
        this.showRingtones = this.showRingtones.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }

    private getSidebarMode(): SidebarMode {
        if (this.props.isShowDialog) {
            return SidebarMode.DIALOG;
        }

        return SidebarMode.HOME;
    }

    private showTodoList(): void {
        this.props.dispatch(showDialogAction());
        this.props.dispatch(setDialogModeAction(DialogMode.TODO_LIST));
    }

    private showAnalytics(): void {
        this.props.dispatch(showDialogAction());
        this.props.dispatch(setDialogModeAction(DialogMode.ANALYTICS));
    }

    private showRingtones(): void {
        this.props.dispatch(showDialogAction());
        this.props.dispatch(setDialogModeAction(DialogMode.RINGTONES));
    }

    private hideDialog(): void {
        this.props.dispatch(hideDialogAction());
    }

    render() {
        return (
            <Sidebar
                mode={this.getSidebarMode()}
                showTodoList={this.showTodoList}
                showAnalytics={this.showAnalytics}
                showRingtones={this.showRingtones}
                hideDialog={this.hideDialog}
            />
        );
    }
}

const ConnectedSidebar = connect(mapStateToProps)(SidebarContainer);

export default ConnectedSidebar;
