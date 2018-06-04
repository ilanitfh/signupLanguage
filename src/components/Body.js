import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Tile from "./Tile";

class Body extends React.Component {
    render() {
        let mainJson = jsonLocalCall("main");

        let tilesElements = mainJson.categories.map((category) =>
            <Tile tileId={category.id} tileName={category.name} tileUrl={"/word/" + category.id} imageName={category.imageName} />);
        return (
            <div className="App-intro">
                <div className="centerWidthAlign ">
                    <div className="fgTileContainer ">
                        {tilesElements}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;



