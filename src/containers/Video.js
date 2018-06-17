import React from "react";
import '../css/App.css';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import {videoLocalCall} from "../apis/VideoLocalCall";

class Video extends React.Component {
    render() {
        let videoName = this.props.routeParams.videoName;
        let videoContent = videoLocalCall(videoName);
        return (
            <div className="App-intro">
                <Player
                    playsInline
                    poster="/images/image.png"
                    src={videoContent}
                    autoPlay={true}
                />
            </div>
        )
    }
}

export default Video;
