import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Word from "./Word";


class Search extends React.Component {
    constructor(props){
        super(props);
        var mainJson = jsonLocalCall("main").categories;
        var words = mainJson.reduce((acc, cur) => {
                                                return acc.concat(cur.words)
                                            }, []);
        
        this.state = {words : words};
     }

    filterList(words, filterStr){
        return words.filter(function(word){
                return word.name.includes(filterStr);
            });
    }

    render() {
        return (
            <Word words={
                this.filterList(this.state.words, this.props.routeParams.searchStr)
            } />
        )
    }
}

export default Search;
