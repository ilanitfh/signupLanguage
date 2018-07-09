import React from "react";
import '../css/App.css';
import '../css/video.css';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import {videoLocalCall} from "../apis/VideoLocalCall";
import {getTheme} from "../utils/Utils";

class Video extends React.Component {

    componentDidMount() {
        // subscribe state change
        this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state, prevState) {
        if (state.paused || state.ended) {
            this.refs.buttonReplay.style.visibility = "visible";
        } else {
           this.refs.buttonReplay.style.visibility = "hidden";
        }
        
    }
    render() {
        let videoName = this.props.routeParams.videoName;
        let categoryId = this.props.routeParams.categoryId;
        let videoContent = videoLocalCall(videoName);
        return (
            <div  className="App-intro " theme={getTheme(categoryId)}>
                <Player
                    ref="player"
                    playsInline
                    
                    src={videoContent}
                    autoPlay={true}
                />
                <div className="replayhost" ref="buttonReplay">
                     <button  className="roundbutton  ">
                        <div className="zmdi zmdi-replay" />
                    </button>
                </div>
            </div>
        )
    }
}

export default Video;
