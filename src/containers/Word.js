import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Card from "../components/Card";
import {themeMap, wordsTranslateX} from "../utils/Utils";

class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getState(this.props);
    }

    getState(props) {
        var state;
        if (props.words === undefined) {
            let mainJson = jsonLocalCall("main");
            let wordId = this.props.routeParams.wordId;
            
            mainJson.categories.forEach((category) => {
                if (category.id === wordId && category.words) {
                    state = {words:category.words, categoryId:category.id};
                }
            });

        } else {
            state = {words:props.words, categoryId:"1"}
        }
        return state;
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getState(newProps));
    }

    render() {
        var wordsElements = this.state.words.map((word) => {
                return <Card key={word.id} cardName={word.name} cardUrl={"/video/" + word.videoName + "/" + this.state.categoryId}
                                imageName={word.imageName} imageName2={word.imageName2} theme={themeMap[this.state.categoryId]} />
            });

        //calculate the average width, while considering double images
        var elementWidths = this.state.words.map((word) => {
            return word.imageName2 ? 300 : 220;
        });
        let widthSum = elementWidths.reduce(function(a, b) { return a + b; });
        let tileW = widthSum / elementWidths.length;

        //calculate best width:
        let tileH = 200;
        let rows = Math.floor( (window.innerHeight - 110) / tileH);
        let cols = Math.ceil(wordsElements.length / rows)
        let width = cols * tileW;
 


        return (
        <div className="App-intro">
                        <div className="centerWidthAlign">
                            <div className="fgTileContainer" style={{width:width+"px", transform:'translateX(' + wordsTranslateX + 'px)'}}>
                                {wordsElements}
                            </div>
                        </div>
                    </div>

        )
    }
}

export default Word;
