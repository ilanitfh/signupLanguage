import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Card from "../components/Card";

class Word extends React.Component {
    render() {
        let mainJson = jsonLocalCall("main");
        let wordId = this.props.routeParams.wordId;
        let wordsElements;

        mainJson.categories.map((category) => {
            if (category.id === wordId && category.words) {
                wordsElements = category.words.map((word) => {
                    return <Card key={word.id} cardName={word.name} cardUrl={"/video/" + word.videoName}
                                 imageName={word.imageName} theme={"red"}/>
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
