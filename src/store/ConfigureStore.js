import { createStore, applyMiddleware } from "redux";
import reducersAndInitializers from "../reducers/Reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { combineReducers } from "redux";

const getInitializersAndReducers = (config) => {
    var initializers = [];
    var reducers = {};
    for (let name in config) {
        if (config.hasOwnProperty(name) === false) {
            continue;
        }
        let item = config[name];
        let reducer = null;
        if (typeof item === "function") {
            reducer = item;
        } else if ("initializer" in item) {
            initializers.push(item.initializer);
            reducer = item.reducer;
        }
        if (reducer !== null) {
            reducers[name] = reducer;
        }
    }
    return { reducers, initializers };
};


// Configure store
export default function configureStore(initialState) {

    let { reducers, initializers } = getInitializersAndReducers(reducersAndInitializers);

    const store = createStore(
        combineReducers(reducers),
        initialState,
        composeWithDevTools (
            applyMiddleware(
                /*createLogger(),*/
                thunk
            )
        ));

    initializers.forEach(initializer => {
        initializer(store.dispatch, store.getState);
    });

    return store;
}
