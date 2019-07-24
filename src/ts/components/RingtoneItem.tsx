import * as React from "react";
import { PomodoroMode } from "../constants/PomodoroMode";
import { getRingtoneId } from "../helpers/idGenerator";
import Ringtone from "../class/Ringtone";

interface IRingtoneItemProps {
    ringtone: Ringtone;
    mode: PomodoroMode;
}

class RingtoneItem extends React.Component<IRingtoneItemProps> {
    constructor(props: IRingtoneItemProps) {
        super(props);
    }

    render() {
        return (
            <div className="ringtone-item">
                <input
                    type="radio"
                    name={`${this.props.mode}-ringtone`}
                    className="radio-input"
                    id={`${this.props.mode}-ringtone-item-input-${
                        this.props.ringtone.id
                    }`}
                    checked={true}
                />
                <label
                    className="radio-label"
                    htmlFor={`${this.props.mode}-ringtone-item-input-${
                        this.props.ringtone.id
                    }`}
                >
                    <span className="mock-radio-input" />
                    {this.props.ringtone.name}
                </label>
            </div>
        );
    }
}

export default RingtoneItem;
