import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/appReducer";
import {
    setDialogModeAction,
    hideDialogAction,
} from "../store/dialog/dialogActions";
import { DialogMode } from "../constants/DialogMode";
import DialogNav from "../components/DialogNav";

interface IDialogNavContainerProps extends IDialogNavStateProps {
    dispatch: Dispatch;
}

interface IDialogNavStateProps {
    dialogMode: DialogMode;
}

const mapStateToProps = (state: AppState): IDialogNavStateProps => ({
    dialogMode: state.dialogState.mode,
});

class DialogNavContainer extends React.Component<IDialogNavContainerProps> {
    constructor(props: IDialogNavContainerProps) {
        super(props);
        this.showTodoList = this.showTodoList.bind(this);
        this.showAnalytics = this.showAnalytics.bind(this);
        this.showRingtones = this.showRingtones.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }

    private showTodoList(): void {
        this.props.dispatch(setDialogModeAction(DialogMode.TODO_LIST));
    }

    private showAnalytics(): void {
        this.props.dispatch(setDialogModeAction(DialogMode.ANALYTICS));
    }

    private showRingtones(): void {
        this.props.dispatch(setDialogModeAction(DialogMode.RINGTONES));
    }

    private hideDialog(): void {
        this.props.dispatch(hideDialogAction());
    }

    render() {
        return (
            <DialogNav
                dialogMode={this.props.dialogMode}
                showTodoList={this.showTodoList}
                showAnalytics={this.showAnalytics}
                showRingtones={this.showRingtones}
            />
        );
    }
}

const ConnectedDialogNav = connect(mapStateToProps)(DialogNavContainer);

export default ConnectedDialogNav;
