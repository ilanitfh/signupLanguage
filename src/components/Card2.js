import React from "react";
import { Link } from "react-router";
import "../css/card.css";
import "../css/Tile.css";

import {imageLocalCall} from "../apis/ImageLocalCall";
import Rope from "../components/Rope";


class Card2 extends React.Component {

    /*play(e) {
        e.preventDefault = true
        let url = document.basePath + (document.basePath.startsWith("file")?"www/":"") + "videos/"+ this.props.vidName;

        document.getElementById("player").src = url;
        document.getElementById("playerhost").style.visibility = "visible";
    }*/
    
    render() {

        let imageSrc = this.props.imageName ? imageLocalCall(this.props.imageName) : "image1.png";
        let image2 = this.props.imageName2?<img slot="body" className="tileImg" src={imageLocalCall(this.props.imageName2)} alt="card Placeholder"></img>:"";
        let cardDouble = this.props.imageName2?{'--card-width':'100%'}:{};
        
        return (
        <Link to={this.props.cardUrl}>
            <Rope>
               
                    <div className="card" style={cardDouble} theme={this.props.theme}>
                        <div className="header clip"></div>
                        <div className="main">
                            {image2}
                            <img className="tileImg" src={imageSrc} alt="card Placeholder"></img>
                        </div>
                        <div className="footer">
                            <h2 className="rtl tileFont">{this.props.cardName}</h2>
                        </div>
                    </div>
             

            </Rope>
        </Link>
        );
    }
}

export default Card2;
