import React, { Component } from 'react';

import './css/App.css';
import './css/style.css';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";
import {browserHistory} from "react-router";

class App extends Component {
    render() {
        let backElement = <div></div>;
        if(this.props.location.pathname !== "/") {
            backElement = <button slot="end-bar" className="zmdi zmdi-arrow-right"
                              onClick={() => browserHistory.goBack()}></button>
        }
        return (
            <div className="App">
                <issie-shell theme="blue" id="page1" className="page">
                    <button slot="start-bar" className="zmdi zmdi-info-outline"></button>
                    <button slot="start-bar" className="zmdi zmdi-menu"></button>
                    <h1 slot="title">שפת הסימנים</h1>
                    <issie-search theme="blue" slot="end-bar"></issie-search>
                    <a slot="next" href="#page5"><img src="assets/arrow-right.svg" alt="arrow"/></a>
                    <a slot="prev" href="#page5"><img src="assets/arrow-left.svg" alt="arrow"/></a>
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
