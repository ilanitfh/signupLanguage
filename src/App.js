import React, { Component } from 'react';
import Header from "./components/Header";

import './css/App.css';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
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
