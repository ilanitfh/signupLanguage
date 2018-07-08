import React from "react";
import '../css/App.css';
import "../../node_modules/video-react/dist/video-react.css";
//import { Player } from 'video-react';
import {videoLocalCall} from "../apis/VideoLocalCall";
import {getTheme} from "../utils/Utils";

class Video extends React.Component {
    render() {
        let videoName = this.props.routeParams.videoName;
        let categoryId = this.props.routeParams.categoryId;
        let videoContent = videoLocalCall(videoName);
        return (
            <issie-player slot="body" theme={getTheme(categoryId)} class="nav"
                src={videoContent}
                poster="assets/poster.png" />
            //     <Player className="video"
            //         playsInline
            //         poster="/images/image.png"
            //         src={videoContent}
            //         autoPlay={true}
            //     />
        )
    }
}

export default Video;
