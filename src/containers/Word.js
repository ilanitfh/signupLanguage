import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Card from "../components/Card";
import {themeMap} from "../utils/Utils";

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
            
            mainJson.categories.map((category) => {
                if (category.id === wordId && category.words) {
                    state = {words:category.words, categoryId:category.id};
                    return;
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
                                imageName={word.imageName} theme={themeMap[this.state.categoryId]} />
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
