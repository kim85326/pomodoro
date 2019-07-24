import * as React from "react";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

class AnalyticsDialogContent extends React.Component {
    render() {
        return (
            <>
                <div className="dialog-block">
                    <div className="dialog-block-title">
                        <div className="dialog-block-title-text">
                            focus time
                        </div>
                    </div>
                    <div className="dialog-block-content">
                        <div className="focus-time-group">
                            <div className="focus-time-item">
                                <div className="focus-time-item-title">
                                    today
                                </div>
                                <div className="focus-time-item-content">
                                    <div className="focus-time-item-amount">
                                        20
                                    </div>
                                    <div className="focus-time-item-unit">
                                        /tomato
                                    </div>
                                </div>
                            </div>
                            <div className="focus-time-item">
                                <div className="focus-time-item-title">
                                    week
                                </div>
                                <div className="focus-time-item-content">
                                    <div className="focus-time-item-amount">
                                        108
                                    </div>
                                    <div className="focus-time-item-unit">
                                        /tomato
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dialog-block">
                    <div className="dialog-block-title">
                        <div className="dialog-block-title-text">chart</div>
                        <div className="chart-date-picker">
                            <a className="chart-date-picker-prev-week">
                                <ChevronLeft />
                            </a>
                            <div className="chart-date-picker-start-time">
                                2019.7.1
                            </div>
                            <div className="chart-date-picker-hyphen">-</div>
                            <div className="chart-date-picker-start-time">
                                2019.7.7
                            </div>
                            <a className="chart-date-picker-next-week">
                                <ChevronRight />
                            </a>
                        </div>
                    </div>
                    <div className="dialog-block-content" />
                </div>
            </>
        );
    }
}

export default AnalyticsDialogContent;
