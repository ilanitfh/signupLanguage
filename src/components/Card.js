import React from "react";
import { Link } from "react-router";
import "../css/Common.css";
import {imageLocalCall} from "../apis/ImageLocalCall";

const Card = ({cardId, cardName, cardUrl, imageName, imageName2, theme}) => {
    let imageSrc = imageName ? imageLocalCall(imageName) : "image1.png";
    let image2 = imageName2?<img slot="body" className="tileImg" src={imageLocalCall(imageName2)} alt="card Placeholder"></img>:"";
    let cardDouble = imageName2?{'--card-width':'100%'}:{};
                        
    return (
        <Link to={cardUrl}>
            <issie-rope slot="title" >
                <div style={cardDouble}>
                    <issie-card theme={theme} class="pin">
                        <h2 slot="title" className="rtl tileFont">{cardName}</h2>
                        <img slot="body" className="tileImg" src={imageSrc} alt="card Placeholder"></img>
                        {image2}
                    </issie-card>
                </div>
            </issie-rope>
        </Link>
    );
};
export default Card;
