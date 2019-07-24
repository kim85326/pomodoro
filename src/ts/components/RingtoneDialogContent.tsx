import * as React from "react";
import RingtoneList from "./RingtoneList";
import { PomodoroMode } from "../constants/PomodoroMode";

class RingtoneDialogContent extends React.Component {
    render() {
        return (
            <>
                <div className="dialog-block">
                    <div className="dialog-block-title">
                        <div className="dialog-block-title-text">work</div>
                    </div>
                    <div className="dialog-block-content">
                        <RingtoneList mode={PomodoroMode.WORK} />
                    </div>
                </div>
                <div className="dialog-block">
                    <div className="dialog-block-title">
                        <div className="dialog-block-title-text">break</div>
                    </div>
                    <div className="dialog-block-content">
                        <RingtoneList mode={PomodoroMode.BREAK} />
                    </div>
                </div>
            </>
        );
    }
}

export default RingtoneDialogContent;
