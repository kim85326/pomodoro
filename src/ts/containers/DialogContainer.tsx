import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/appReducer";
import Dialog from "../components/Dialog";
import { DialogMode } from "../constants/DialogMode";

interface IDialogContainerProps extends IDialogStateProps {
    dispatch: Dispatch;
}

interface IDialogStateProps {
    isShow: boolean;
    mode: DialogMode;
}

const mapStateToProps = (state: AppState): IDialogStateProps => ({
    isShow: state.dialogState.isShow,
    mode: state.dialogState.mode,
});

class DialogContainer extends React.Component<IDialogContainerProps> {
    constructor(props: IDialogContainerProps) {
        super(props);
    }

    render() {
        if (! this.props.isShow) {
            return null;
        }

        return (
            <Dialog
                mode={this.props.mode}
            />
        );
    }
}

const ConnectedDialog = connect(mapStateToProps)(DialogContainer);

export default ConnectedDialog;
