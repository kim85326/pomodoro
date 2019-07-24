import * as React from "react";
import { List, Assessment, LibraryMusic } from "@material-ui/icons";
import { DialogMode } from "../constants/DialogMode";

interface IDialogNavProps {
    dialogMode: DialogMode;
    showTodoList: () => void;
    showAnalytics: () => void;
    showRingtones: () => void;
}

class DialogNav extends React.Component<IDialogNavProps> {
    constructor(props: IDialogNavProps) {
        super(props);
    }

    private getActiveClass(mode: DialogMode): string {
        if (this.props.dialogMode === mode) {
            return "active";
        }

        return "";
    }

    render() {
        return (
            <ul className="dialog-nav">
                <li
                    className={`dialog-nav-item ${this.getActiveClass(
                        DialogMode.TODO_LIST,
                    )}`}
                >
                    <a
                        className="dialog-nav-link"
                        onClick={this.props.showTodoList}
                    >
                        <div className="dialog-nav-link-icon">
                            <List />
                        </div>
                        <div className="dialog-nav-link-text">to-do list</div>
                    </a>
                </li>
                <li
                    className={`dialog-nav-item ${this.getActiveClass(
                        DialogMode.ANALYTICS,
                    )}`}
                >
                    <a
                        className="dialog-nav-link"
                        onClick={this.props.showAnalytics}
                    >
                        <div className="dialog-nav-link-icon">
                            <Assessment />
                        </div>
                        <div className="dialog-nav-link-text">analytics</div>
                    </a>
                </li>
                <li
                    className={`dialog-nav-item ${this.getActiveClass(
                        DialogMode.RINGTONES,
                    )}`}
                >
                    <a
                        className="dialog-nav-link"
                        onClick={this.props.showRingtones}
                    >
                        <div className="dialog-nav-link-icon">
                            <LibraryMusic />
                        </div>
                        <div className="dialog-nav-link-text">ringtones</div>
                    </a>
                </li>
            </ul>
        );
    }
}

export default DialogNav;
