import React from "react";
import { Link } from "react-router";
import "../css/Tile.css";





import {imageLocalCall} from "../apis/ImageLocalCall";

const Tile = ({tileId, tileName, tileUrl, imageName}) => {
    let imageSrc = imageName ? imageLocalCall(imageName) : "image1.png";
    return (


            <Link to={tileUrl}>
            <div class="box">
                <header>
                    <span></span>
                    <div></div>
                </header>
                <main>
                    <div>
                        <img src="assets/category.png" alt="Category Placeholder"></img>
                    </div>
                </main>
                <footer>
                    <a href={tileUrl}>{tileName}</a>
                </footer>
                <aside class="decor-bottom">

                </aside>
                <aside class="decor-top">
                    <slot name="decor-top"></slot>
                </aside>
            </div>
            </Link>

          );
};
export default Tile;
