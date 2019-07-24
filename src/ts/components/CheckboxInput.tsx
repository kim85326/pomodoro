import * as React from "react";
import { Check } from "@material-ui/icons";

class CheckboxInput extends React.Component {
    render() {
        return (
            <>
                <input
                    type="checkbox"
                    className="checkbox-input todo-item-is-completed"
                    id="todo-item-is-completed-input-4"
                />
                <label
                    className="checkbox-label"
                    htmlFor="todo-item-is-completed-input-4"
                >
                    <span className="mock-checkbox-input">
                        <Check />
                    </span>
                    <span className="checkbox-label-text">
                        the Forth thing to do today
                    </span>
                </label>
            </>
        );
    }
}

export default CheckboxInput;
