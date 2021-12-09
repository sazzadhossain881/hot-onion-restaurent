import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./authReducers";
import { cartReducers } from "./cartReducers";
import { reducers } from "./reducers";

const root = combineReducers({
    reducers,
    cartReducers,
    authReducers,
});

export const store = createStore(root, applyMiddleware(thunk));