import React from "react";
import '../css/App.css';


import {getTheme} from "../utils/Utils";

class Video extends React.Component {
 
    render() {
        let videoName = this.props.routeParams.videoName;
        let categoryId = this.props.routeParams.categoryId;
        //let videoContent = videoLocalCall(videoName);
        let videoContent = document.basePath + (document.basePath.startsWith("file")?"www/":"") + "videos/"+ videoName;
        document.getElementById("player").src = videoContent;
 

        return (
            <div  className="App-intro " theme={getTheme(categoryId)}>
            </div>
        )
    }
}

export default Video;
