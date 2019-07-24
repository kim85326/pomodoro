import * as React from "react";
import { List, Assessment, LibraryMusic, Clear } from "@material-ui/icons";
import Logo from "./Logo";
import { SidebarMode } from "../constants/SidebarMode";

interface ISidebarProps {
    mode: SidebarMode;
    showTodoList: () => void;
    showAnalytics: () => void;
    showRingtones: () => void;
    hideDialog: () => void;
}

class Sidebar extends React.Component<ISidebarProps> {
    constructor(props: ISidebarProps) {
        super(props);
    }

    private getItemsDom(): React.ReactNode {
        if (this.props.mode === SidebarMode.DIALOG) {
            return (
                <li className="sidebar-nav-item">
                    <a
                        className="sidebar-nav-link"
                        onClick={this.props.hideDialog}
                    >
                        <Clear />
                    </a>
                </li>
            );
        }

        return (
            <>
                <li className="sidebar-nav-item">
                    <a
                        className="sidebar-nav-link"
                        onClick={this.props.showTodoList}
                    >
                        <List />
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a
                        className="sidebar-nav-link"
                        onClick={this.props.showAnalytics}
                    >
                        <Assessment />
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a
                        className="sidebar-nav-link"
                        onClick={this.props.showRingtones}
                    >
                        <LibraryMusic />
                    </a>
                </li>
            </>
        );
    }

    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar-nav">{this.getItemsDom()}</ul>
                <Logo />
            </div>
        );
    }
}

export default Sidebar;
