import "babel-polyfill";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import HomeContainer from "./containers/HomeContainer";
import DialogContainer from "./containers/DialogContainer";

render(
    <Provider store={appStore}>
        <HomeContainer />
        <DialogContainer/>
    </Provider>,
    document.getElementById("root"),
);
