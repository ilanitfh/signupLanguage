import React, { Component } from 'react';

import './css/App.css';
import './css/style.css';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {jsonLocalCall} from "./apis/JsonLocalCall";

import PropTypes from "prop-types";
import {browserHistory} from "react-router";
import SearchInput from "./components/SearchInput";

import {scrollLeft, scrollRight, saveWordTranslateX, saveRootTranslateX, getTheme, VideoToggle} from "./utils/Utils";
import Shell from "./containers/Shell";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {searchString:""};
        this.handleSearch = this.handleSearch.bind(this);
        this.goBack = this.goBack.bind(this);
        this.savePos = this.savePos.bind(this);
        this.ScrollLeft = this.ScrollLeft.bind(this);
        this.ScrollRight = this.ScrollRight.bind(this);
        this.showInfo = this.showInfo.bind(this);

        let isMobile = false;
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        let screenArea = winWidth * winHeight;
        const minAreaIpad = 1024*768;

        if(screenArea < minAreaIpad) {
            isMobile = true;
        }

        this.state = {
            isMobile : isMobile
        };
    }

    handleSearch(e) {
        if (e.target.value.length > 1
            ) {
            this.props.router.push('/search/' + e.target.value);
            console.log("Search: " + e.target.value);
        } else if (this.props.location.pathname.startsWith("/search")) {
            //go back to category
            this.props.router.push('/');
        }
 
        
        this.setState({searchString: e.target.value})
    }

    goBack() {
        // clean the search bar
        let path = this.props.location.pathname;
        if (!path.startsWith('/info')) {
            this.refs.searchInput.refs.input.value = "";
        }
        if (path.startsWith('/word')) {
            //reset words position
            saveWordTranslateX(0);
        }
        browserHistory.goBack();
    }
    savePos (newVal) {
        let path = this.props.location.pathname;
        if (path.startsWith('/word')) {
            saveWordTranslateX(newVal);
        } else if (path === '/') {
            saveRootTranslateX(newVal);
        }
    }
    ScrollLeft() {
        this.savePos(scrollLeft());
    }

    ScrollRight() {
        this.savePos(scrollRight());
    }

    showInfo() {
        this.props.router.push('/info');
    }

    render() {
        let categoryTheme = "blue";
        let title = "שפת הסימנים";
        let mainJson = jsonLocalCall("main");
        let path = this.props.location.pathname;
        let leftArrow = "";
        let rightArrow = "";

        let backElement = <div className="rowdiv" slot="end-bar"><button  className="roundbutton "
                        onClick={this.goBack} style={{visibility:(path !== "/" ? "visible":"hidden") , "--radius":"50px"}}><div className="zmdi zmdi-arrow-right"/></button></div>
        let searchInput = "";

        if(path.startsWith("/word")){
            let categoryId = this.props.params.wordId;
            categoryTheme=getTheme(categoryId);
            title = mainJson.categories[categoryId-1].name;
        }

        if(path.startsWith("/video")){
            let categoryId = this.props.params.categoryId;
            categoryTheme = getTheme(categoryId);
            title =this.props.params.title;

            VideoToggle(true);
        } else {
            VideoToggle(false);
        }

        if(path.startsWith("/word")){
            let categoryId = this.props.params.wordId;
            categoryTheme=getTheme(categoryId);
            title = mainJson.categories[categoryId-1].name;
        }
        if(!path.startsWith("/info")){
            searchInput = <SearchInput theme={categoryTheme} slot="title" onChange={this.handleSearch} ref="searchInput" style={{display: "inline-block"}} isMobile={this.state.isMobile}/>
        }
        if(!path.startsWith("/video") &&  !path.startsWith("/info")) {

            leftArrow =  <a slot="next" onClick={this.ScrollRight} id="scrolRight" className="navBtn"><img src="assets/arrow-right.svg" alt="arrow"/></a>
            rightArrow = <a slot="prev" onClick={this.ScrollLeft} id="scrollLeft" className="navBtn"><img src="assets/arrow-left.svg" alt="arrow"/></a>
        }
        return (
            <div className="App">
                <Shell theme={categoryTheme} id="page1" isMobile={this.state.isMobile}>
                    <button slot="start-bar" className="zmdi zmdi-info-outline" onClick={this.showInfo}></button>
                    <div slot="title" style={{display: "inline-block"}}>{title}</div>
                    {searchInput}
                    {leftArrow}
                    {rightArrow}
                    {backElement}
                 </Shell>
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
