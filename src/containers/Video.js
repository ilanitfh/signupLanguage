import React from "react";
import '../css/App.css';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
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
                {/*<Player
                    ref="player"
                    playsInline
                    
                    src={videoContent}
                    autoPlay={true}
                />
                <div className="replayhost" ref="buttonReplay">
                     <button  className="roundbutton  ">
                        <div className="zmdi zmdi-replay" />
                    </button>
                </div>*/}
            </div>
        )
    }
}

export default Video;
