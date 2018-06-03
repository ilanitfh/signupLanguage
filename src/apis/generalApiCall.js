import {jsonLocalCall} from "./JsonLocalCall";

export const getData = (apiName, args) => {
    return jsonLocalCall(apiName);
};