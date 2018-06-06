import React from "react";
import { Link } from "react-router";
import "../css/Tile.css";
import "../css/Common.css";
import {imageLocalCall} from "../apis/ImageLocalCall";

const Tile = ({tileId, tileName, tileUrl, imageName}) => {
    let imageSrc =  imageName ? imageLocalCall(imageName): "image1.png";
    return (
        <Link to={tileUrl}>
            <div className="fgTile">
                <span>{tileName}</span>
                <div className="tileImage">
                    <img src={imageSrc} alt={tileName} width="70%" height="70%"/>
                </div>
            </div>
        </Link>
    );
};
export default Tile;
