/**
 * Returns the location of the video files contains the form fields
 * @param videoName
 * @returns {*}
 */
const getVideoContent = (videoName):string => {
    return require("../videos/" + videoName);
};

/**
 * Get the content of the video files contains the form fields
 * @param videoName
 * @returns {string}
 */
export const videoLocalCall = (videoName:string) => {
    return getVideoContent(videoName);
};
