
/**
 * Returns the location of the video files contains the form fields
 * @param videoName
 * @returns {*}
 */
const getVideoContent = (videoName):string => {
    Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });
    


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
