import * as types from "./ActionsTypes";
import {getData} from "../apis/generalApiCall";

const loadMainJsonSuccess = (mainFields) => ({
    type: types.LOAD_MAIN_JSON,
    mainFields: {...mainFields, loaded: true}
});

export const loadMainJson = () => (dispatch, getState) => {
    let mainFields = getData("main");
    if(mainFields) {
        dispatch(loadMainJsonSuccess(mainFields));
    }
};