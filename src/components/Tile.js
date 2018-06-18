import React from "react";
import { Link } from "react-router";
import "../css/Tile.css";
import "../css/Common.css";
import {imageLocalCall} from "../apis/ImageLocalCall";

const Tile = ({tileId, tileName, tileUrl, imageName, themeFlavor}) => {
    let imageSrc = imageName ? imageLocalCall(imageName) : "image1.png";
    return (
        <Link to={tileUrl}>
            <div className="tileBox">
                        <issie-shelf slot="title" >
                <issie-box theme="blue" theme-flavor= {themeFlavor}>
                    <h2 slot="title" className="rtl tileFont">{tileName}</h2>
                    <img slot="body" className="tileImg" src={imageSrc} alt="Category Placeholder"></img>
                </issie-box>
                            </issie-shelf>
            </div>
        </Link>
    );
};
export default Tile;
