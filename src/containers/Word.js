import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Tile from "../components/Tile";

class Word extends React.Component {
    render() {
        let mainJson = jsonLocalCall("main");
        let wordId = this.props.routeParams.wordId;
        let wordsElements;

        mainJson.categories.map((category) => {
            if (category.id === wordId && category.words) {
                wordsElements = category.words.map((word) => {
                    return <Tile key={word.id} tileName={word.name} tileUrl={"/video/" + word.videoName}
                                 imageName={word.imageName}/>
                })
            }
            return <div></div>
        });

        return (
        <div className="App-intro">
                        <div className="centerWidthAlign">
                            <div className="fgTileContainer ">
                                {wordsElements}
                            </div>
                        </div>
                    </div>

        )
    }
}

export default Word;
