import React, { Component } from 'react';
import Header from "./components/Header";

import './css/App.css';
import './css/style.css';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

class App extends Component {
    render() {
        return (
            <div className="App">
                <issie-shell theme="blue" id="page1" className="page">
                             <button slot="start-bar" className="zmdi zmdi-info-outline"></button>
                             <button slot="start-bar" className="zmdi zmdi-menu"></button>
                             <h1 slot="title">ספת הסימנים - קטגוריות</h1>
                             <issie-search theme="blue" slot="end-bar"></issie-search>
                              <issie-shelf theme="blue" slot="body">
                                   {this.props.children}
                                </issie-shelf>
                </issie-shell>

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
