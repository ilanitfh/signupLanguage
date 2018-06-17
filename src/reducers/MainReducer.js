import * as types from "../actions/ActionsTypes";
import initialState from "./initialState";

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_MAIN_JSON:
            return {...initialState.mainFields, isLoaded: false};
        default:
            return state;
    }
};
