import React from "react";
import { Link } from "react-router";
import "../css/Tile.css";
import "../css/Common.css";
import '../css/style.css';
import {imageLocalCall} from "../apis/ImageLocalCall";

const Tile = ({tileId, tileName, tileUrl, imageName}) => {
    let imageSrc = imageName ? imageLocalCall(imageName) : "image1.png";
    return (
        <Link to={tileUrl}>
                 <issie-box theme="blue" theme-flavor="13">
                    <h2 slot="title" className="rtl tileFont">{tileName}</h2>
                    <img slot="body" width="100%" height="100%" src={imageSrc} alt="Category Placeholder"></img>
                    <img slot="decor-top" src="assets/r-cube.svg" alt="cube"></img>
                 </issie-box>
        </Link>
    );
};
export default Tile;
