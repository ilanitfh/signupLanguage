/**
 * Returns the location of the image files
 * @param image
 * @returns {*}
 */
const getImageContent = (image):string => {
    switch (image) {
        case "adjective.png":
            return require("../images/adjective.png");
        case "animals.png":
            return require("../images/animals.png");
        case "body_parts.png":
            return require("../images/body_parts.png");
        case "food.png":
            return require("../images/food.png");
        case "nature.png":
            return require("../images/nature.png");
        case "occupations.png":
            return require("../images/occupations.png");
        case "time.png":
            return require("../images/time.png");
        case "vegetables.png":
        return require("../images/vegetables.png");
        case "verbs.png":
            return require("../images/verbs.png");
        default:
            throw new Error("Image Not Found " + image);
    }
};

/**
 * Get the content of the image files
 * @param imageName
 * @returns {string}
 */
export const imageLocalCall = (imageName:string) => {
    return getImageContent(imageName);
};
