import { ActionPrefix } from "../../constants/ActionPrefix";
import { DialogMode } from "../../constants/DialogMode";

const prefix = ActionPrefix.DIALOG;
export const DialogActionType = {
    SHOW_DIALOG: `${prefix}_SHOW_DIALOG`,
    HIDE_DIALOG: `${prefix}_HIDE_DIALOG`,
    SET_DIALOG_MODE: `${prefix}_SET_DIALOG_MODE`,
};

export interface IShowDialogAction {
    type: typeof DialogActionType.SHOW_DIALOG;
}

export interface IHideDialogAction {
    type: typeof DialogActionType.HIDE_DIALOG;
}

export interface ISetDialogModeAction {
    type: typeof DialogActionType.SET_DIALOG_MODE;
    mode: DialogMode;
}

export type IDialogAction = ISetDialogModeAction | IShowDialogAction | IHideDialogAction ;
