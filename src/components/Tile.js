import React from "react";
import { Link } from "react-router";
import "../css/Tile.css";
import "../css/Common.css";
import {imageLocalCall} from "../apis/ImageLocalCall";

const Tile = ({tileId, tileName, tileUrl, imageName}) => {
    let imageSrc = imageName ? imageLocalCall(imageName) : "image1.png";
    return (
        <Link to={tileUrl}>
            <div className="tileBox">
                <issie-box theme="blue" theme-flavor="13">
                    <h2 slot="title" className="rtl tileFont">{tileName}</h2>
                    <img slot="body" src={imageSrc} alt="Category Placeholder" width="100%" height="100%"></img>
                </issie-box>
            </div>
        </Link>
    );
};
export default Tile;
