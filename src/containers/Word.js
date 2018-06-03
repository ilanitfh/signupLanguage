import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import {Link} from "react-router";

class Word extends React.Component {
    render() {
        let mainJson =  jsonLocalCall("main");
        let wordId = this.props.routeParams.wordId;
        let words ;
        return (
            <div className="App-intro">
                {

                    mainJson.categories.map(function(category){
                        if(category.id === wordId && category.words) {
                             words = category.words.map(function(word) {
                                return <div className="rtl"  key={word.id}><Link to={"/video/" + word.videoName}>{word.name}</Link></div>
                            });
                        } else {
                            return <div key={category.id}></div>
                        }
                     return words;
                    })
                }
            </div>
        )
    }
}

export default Word;
