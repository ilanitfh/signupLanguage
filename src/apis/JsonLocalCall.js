/**
 * Returns the location of the json files contains the form fields
 * @param jsonName
 * @returns {*}
 */
const getJsonContent = (jsonName):string => {
    switch (jsonName) {
        case "main":
            return require("../jsons/main.json");
        default:
            throw new Error("Json Not Found " + jsonName);
    }
};

/**
 * Get the content of the json files contains the form fields
 * @param jsonName
 * @returns {string}
 */
export const jsonLocalCall = (jsonName:string) => {
    return getJsonContent(jsonName);
};
