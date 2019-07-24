import * as React from "react";

class RadioInput extends React.Component {
    render() {
        return (
            <>
                <input
                    type="radio"
                    name="work-ringtone"
                    className="radio-input"
                    id="work-ringtone-item-input-music"
                />
                <label
                    className="radio-label"
                    htmlFor="work-ringtone-item-input-music"
                >
                    <span className="mock-radio-input" />
                    music
                </label>
            </>
        );
    }
}

export default RadioInput;
