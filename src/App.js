import React, { Component } from 'react';

import './css/App.css';
import './css/style.css';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {jsonLocalCall} from "./apis/JsonLocalCall";

import PropTypes from "prop-types";
import {browserHistory} from "react-router";

import {scrollLeft} from "./utils/Utils";
class App extends Component {
    render() {

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
            "24": "flavor-23"
        };

        let backElement = <div></div>;
        let categoryTheme = "blue";
        let title = "שפת הסימנים";
        let mainJson = jsonLocalCall("main");
        let path = this.props.location.pathname;
        if(path !== "/") {
            backElement = <button slot="end-bar" className="zmdi zmdi-arrow-right"
                                  onClick={() => browserHistory.goBack()} />
        }

        if(path.startsWith("/word")){
            let categoryId = this.props.params.wordId;
            categoryTheme=themeMap[categoryId];
            title = mainJson.categories[categoryId-1].name;
        }
        let pageNum = 1;
        function callScrollLeft() {
            if(((pageNum+1)* 450) < 2000) {
                pageNum++;
                scrollLeft(pageNum);
            }
        }

        function callScrollRight() {
            if(pageNum > 0){
                pageNum --;
                scrollLeft(pageNum);
            }
        }

        if(path.startsWith("/word")){
            let categoryId = this.props.params.wordId;
            categoryTheme=themeMap[categoryId];
            title = mainJson.categories[categoryId-1].name;
        }
        return (
            <div className="App">
                <issie-shell theme={categoryTheme} id="page1" className="page">
                    <button slot="start-bar" className="zmdi zmdi-info-outline"></button>
                    <button slot="start-bar" className="zmdi zmdi-menu"></button>
                    <h1 slot="title">{title}</h1>
                    <issie-search theme={categoryTheme} slot="end-bar"></issie-search>
                    <a slot="next" onClick={callScrollLeft} id="scrollLeft" class="navBtn"><img src="assets/arrow-right.svg" alt="arrow"/></a>
                    <a slot="prev" onClick={callScrollRight} id="scrollRight" class="navBtn"><img src="assets/arrow-left.svg" alt="arrow"/></a>
                    { backElement }
                </issie-shell>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.any
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
