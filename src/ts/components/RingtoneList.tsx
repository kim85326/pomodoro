import * as React from "react";
import { PomodoroMode } from "../constants/PomodoroMode";
import { getRingtoneId } from "../helpers/idGenerator";
import Ringtone from "../class/Ringtone";
import RingtoneItem from "./RingtoneItem";

const ringtones = [
    {
        id: getRingtoneId.next().value,
        name: "none",
    },
    {
        id: getRingtoneId.next().value,
        name: "default",
    },
    {
        id: getRingtoneId.next().value,
        name: "alerm",
    },
    {
        id: getRingtoneId.next().value,
        name: "alert",
    },
    {
        id: getRingtoneId.next().value,
        name: "beep",
    },
    {
        id: getRingtoneId.next().value,
        name: "bell",
    },
    {
        id: getRingtoneId.next().value,
        name: "bird",
    },

    {
        id: getRingtoneId.next().value,
        name: "bugle",
    },
    {
        id: getRingtoneId.next().value,
        name: "digital",
    },
    {
        id: getRingtoneId.next().value,
        name: "drop",
    },
    {
        id: getRingtoneId.next().value,
        name: "horn",
    },
    {
        id: getRingtoneId.next().value,
        name: "music",
    },
    {
        id: getRingtoneId.next().value,
        name: "ring",
    },
    {
        id: getRingtoneId.next().value,
        name: "warning",
    },
    {
        id: getRingtoneId.next().value,
        name: "whistle",
    },
];

interface IRingtoneListProps {
    mode: PomodoroMode;
}

class RingtoneList extends React.Component<IRingtoneListProps> {
    constructor(props: IRingtoneListProps) {
        super(props);
    }

    private getItemsDom(): React.ReactNode {
        return ringtones.map((ringtone: Ringtone) => (
            <RingtoneItem
                mode={this.props.mode}
                key={ringtone.id}
                ringtone={ringtone}
            />
        ));
    }

    render() {
        return <div className="ringtone-group">{this.getItemsDom()}</div>;
    }
}

export default RingtoneList;
