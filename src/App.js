import React, { Component } from 'react';

import './css/App.css';
import './css/style.css';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {jsonLocalCall} from "./apis/JsonLocalCall";

import PropTypes from "prop-types";
import {browserHistory} from "react-router";

import {scrollLeft, themeMap} from "./utils/Utils";
class App extends Component {
    render() {



        let backElement = <div></div>;
        let categoryTheme = "blue";
        let title = "שפת הסימנים";
        let mainJson = jsonLocalCall("main");
        let path = this.props.location.pathname;
        let leftArrow = "";
        let rightArrow = "";
        backElement = <button slot="end-bar" className="zmdi zmdi-arrow-right"
                        onClick={() => browserHistory.goBack()} style={{visibility:(path !== "/" ? "visible":"hidden")}}/>
       

        if(path.startsWith("/word")){
            let categoryId = this.props.params.wordId;
            categoryTheme=themeMap[categoryId];
            title = mainJson.categories[categoryId-1].name;
        }

        if(path.startsWith("/video")){
            let categoryId = this.props.params.categoryId;
            categoryTheme = themeMap[categoryId];
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

        if(!path.startsWith("/video")) {
            leftArrow =  <a slot="next" onClick={callScrollLeft} id="scrollLeft" className="navBtn"><img src="assets/arrow-right.svg" alt="arrow"/></a>
            rightArrow = <a slot="prev" onClick={callScrollRight} id="scrollRight" className="navBtn"><img src="assets/arrow-left.svg" alt="arrow"/></a>
        }
        return (
            <div className="App">
                <issie-shell theme={categoryTheme} id="page1" className="page">
                    <button slot="start-bar" className="zmdi zmdi-info-outline"></button>
                    {/*<button slot="start-bar" className="zmdi zmdi-menu"></button>*/}
                    <h1 slot="title">{title}</h1>
                    <issie-search theme={categoryTheme} slot="end-bar">
                    </issie-search>
 
                    {leftArrow}
                    {rightArrow}
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
