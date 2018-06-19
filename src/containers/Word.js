import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Card from "../components/Card";

class Word extends React.Component {
    render() {
        let mainJson = jsonLocalCall("main");
        let wordId = this.props.routeParams.wordId;
        let wordsElements;

        let themeMap = {
            "1": "flavor-0",
            "2": "flavor-1",
            "3": "flavor-2",
            "4": "flavor-3",
            "5": "flavor-4",
            "6": "flavor-5",
            "7": "flavor-6",
            "8": "flavor-7",
            "9": "flavor-8",
            "10": "flavor-9",
            "11": "flavor-10",
            "12": "flavor-11",
            "13": "flavor-12",
            "14": "flavor-13",
            "15": "flavor-14",
            "16": "flavor-15",
            "17": "flavor-16",
            "18": "flavor-17",
            "19": "flavor-18",
            "20": "flavor-19",
            "21": "flavor-20",
            "22": "flavor-21",
            "23": "flavor-22",
            "24": "flavor-23",
        };

        mainJson.categories.map((category) => {
            if (category.id === wordId && category.words) {
                wordsElements = category.words.map((word) => {
                    return <Card key={word.id} cardName={word.name} cardUrl={"/video/" + word.videoName}
                                 imageName={word.imageName} theme={themeMap[category.id]}/>
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
