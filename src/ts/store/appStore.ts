import { applyMiddleware, createStore, compose } from "redux";
import appReducer from "./appReducer";

const composeEnhancers =
    (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(appReducer, composeEnhancers());

export default rootStore;
