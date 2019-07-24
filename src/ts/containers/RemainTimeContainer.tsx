import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store/appReducer";
import RemainTime from "../components/RemainTime";

interface IRemainTimeContainerProps extends IRemainTimeStateProps {
    dispatch: Dispatch;
}

interface IRemainTimeStateProps {
    remainSeconds: number;
}

const mapStateToProps = (state: AppState): IRemainTimeStateProps => ({
    remainSeconds: state.timerState.remainSeconds,
});

class RemainTimeContainer extends React.Component<IRemainTimeContainerProps> {
    constructor(props: IRemainTimeContainerProps) {
        super(props);
    }

    render() {
        return <RemainTime remainSeconds={this.props.remainSeconds} />;
    }
}

const ConnectedRemainTime = connect(mapStateToProps)(RemainTimeContainer);

export default ConnectedRemainTime;
