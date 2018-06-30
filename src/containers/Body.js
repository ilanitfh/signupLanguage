import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Tile from "../components/Tile";

class Body extends React.Component {
    render() {
        let mainJson = jsonLocalCall("main");

        let tilesElements = mainJson.categories.map((category) =>
            <Tile key={category.id} tileName={category.name} tileUrl={"/word/" + category.id}
                  imageName={category.imageName} themeFlavor={category.id-1}/>);

        //calculate best width:
        let tileH = 220, tileW = 170;
        let rows = Math.floor( (window.innerHeight - 110) / tileH);
        let cols = Math.ceil(tilesElements.length / rows)
        let width = cols * tileW;

        return (
            <div className="App-intro">
                <div className="centerWidthAlign">
                    <div className="fgTileContainer" style={{width:width+"px"}}>
                        {tilesElements}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;



