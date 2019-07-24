import * as React from "react";
import SidebarContainer from "../containers/SidebarContainer";
import DialogTimerContainer from "../containers/DialogTimerContainer";
import TodoListDialogContentContainer from "../containers/TodoListDialogContentContainer";
import AnalyticsDialogContent from "./AnalyticsDialogContent";
import RingtoneDialogContent from "./RingtoneDialogContent";
import { DialogMode } from "../constants/DialogMode";
import DialogNavContainer from "../containers/DialogNavContainer";

interface IDialogProps {
    mode: DialogMode;
}

class Dialog extends React.Component<IDialogProps> {
    constructor(props: IDialogProps) {
        super(props);
    }

    private getContentDom(): React.ReactNode {
        if (this.props.mode === DialogMode.ANALYTICS) {
            return <AnalyticsDialogContent />;
        }

        if (this.props.mode === DialogMode.RINGTONES) {
            return <RingtoneDialogContent />;
        }

        return <TodoListDialogContentContainer />;
    }

    render() {
        return (
            <div className="dialog">
                <SidebarContainer />
                <DialogNavContainer />
                <div className="dialog-main">
                    <div className="dialog-main-content">
                        {this.getContentDom()}
                    </div>
                </div>
                <DialogTimerContainer />
            </div>
        );
    }
}

export default Dialog;
