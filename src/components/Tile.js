import React from "react";
import { Link } from "react-router";
import "../css/Tile.css";
import "../css/Common.css";
import {imageLocalCall} from "../apis/ImageLocalCall";

const Tile = ({tileId, tileName, tileUrl, imageName}) => {
    let imageSrc =  imageName ? imageLocalCall(imageName): "image1.png";
    return (
        <Link to={tileUrl}>
            <div className="fgTile" key={tileId}>
                <span>{tileName}</span>
                <div>
                    <img src={imageSrc} alt={tileName} width="100px" height="100px"/>
                </div>
            </div>
        </Link>
    );
};
export default Tile;
