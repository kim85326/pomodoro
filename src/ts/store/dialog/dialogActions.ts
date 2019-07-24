import {
    DialogActionType,
    IDialogAction,
} from "./dialogActionTypes";
import { DialogMode } from "../../constants/DialogMode";

export const showDialogAction = (): IDialogAction => ({
    type: DialogActionType.SHOW_DIALOG,
});

export const hideDialogAction = (): IDialogAction => ({
    type: DialogActionType.HIDE_DIALOG,
});

export const setDialogModeAction = (mode: DialogMode): IDialogAction => ({
    type: DialogActionType.SET_DIALOG_MODE,
    mode: mode,
});
