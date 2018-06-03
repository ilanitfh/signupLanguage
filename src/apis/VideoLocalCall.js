/**
 * Returns the location of the video files contains the form fields
 * @param videoName
 * @returns {*}
 */
const getVideoContent = (videoName):string => {
    switch (videoName) {
        case "bye-bye.mp4":
            return require("../videos/bye-bye.mp4");
        case "can.mp4":
            return require("../videos/can.mp4");
        case "nurse.mp4":
            return require("../videos/nurse.mp4");
        case "good-morning.mp4":
            return require("../videos/good-morning.mp4");
        case "happy-holiday.mp4":
            return require("../videos/happy-holiday.mp4");
        case "please.mp4":
            return require("../videos/please.mp4");
        default:
            throw new Error("Video Not Found " + videoName);
    }
};

/**
 * Get the content of the video files contains the form fields
 * @param videoName
 * @returns {string}
 */
export const videoLocalCall = (videoName:string) => {
    return getVideoContent(videoName);
};
