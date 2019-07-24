import { cloneDeep } from "lodash";
import { IDialogAction, DialogActionType } from "./dialogActionTypes";
import { DialogMode } from "../../constants/DialogMode";
import { AnyAction } from "redux";

export interface IDialogState {
    isShow: boolean;
    mode: DialogMode;
}

const initialDialogState: IDialogState = {
    isShow: false,
    mode: DialogMode.RINGTONES,
};

export const dialogReducer = (
    state = initialDialogState,
    action: AnyAction,
): IDialogState => {
    switch (action.type) {
    case DialogActionType.SHOW_DIALOG:
        return {
            ...state,
            isShow: true,
        };

    case DialogActionType.HIDE_DIALOG:
        return {
            ...state,
            isShow: false,
        };

    case DialogActionType.SET_DIALOG_MODE:
        return {
            ...state,
            mode: action.mode,
        };

    default:
        return state;
    }
};
