import React from "react";
import { Link } from "react-router";
import "../css/box.css";
import "../css/shelf.css";
import "../css/Tile.css";
import '../css/App.css';

import {imageLocalCall} from "../apis/ImageLocalCall";
import { isNarrow } from "../utils/Utils";


class Tile2 extends React.Component {

    render() {
    
        let imageSrc = this.props.imageName ? imageLocalCall(this.props.imageName) : "image1.png";
        let classNameShelf = isNarrow()? "shelfMobile" : "shelf";
        let classNameTileGroup = isNarrow()? "tileGroupMobile" : "tileGroup";
        return (
            <Link to={this.props.tileUrl}>
            <div className={classNameTileGroup}>
                <div className="tileBox boxhost" theme="blue" theme-flavor= {this.props.themeFlavor}>
                    
                    <div className="box">
                        <header>
                            <span></span>
                            <div></div>
                        </header>
                        <main>
                            <div>
                                <img className="tileImg" src={imageSrc} alt="Category Placeholder"></img>
                            </div>
                        </main>
                        
                    </div>
                                           
  
                    </div>
                    <div className="shelfhost">
                                <div className={classNameShelf}>
                                    <div className="container">
                                        <h2 className="rtl tileText">{this.props.tileName}</h2>
                                    </div>
                                </div>
                            </div>
                </div>
            </Link>
        );
    }
}
export default Tile2;
