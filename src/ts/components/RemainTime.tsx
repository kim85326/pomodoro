import * as React from "react";
import { paddingLeadingZero } from "../helpers/paddingLeadingZero";

interface IRemainTimeProps {
    remainSeconds: number;
}

class RemainTime extends React.Component<IRemainTimeProps> {
    constructor(props: IRemainTimeProps) {
        super(props);
    }

    render() {
        let minutes: number = Math.floor(this.props.remainSeconds / 60);
        let seconds: number = Math.ceil(this.props.remainSeconds % 60);

        if (seconds === 60) {
            minutes = minutes + 1;
            seconds = 0;
        }

        return (
            <div className="remain-time">
                {paddingLeadingZero(minutes)}:{paddingLeadingZero(seconds)}
            </div>
        );
    }
}

export default RemainTime;
