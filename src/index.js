import "babel-polyfill";
import React from 'react';
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import './index.css';

//Containers
import App from './App';
import Word from "./containers/Word";
import Body from "./containers/Body";
import Video from "./containers/Video";
import Search from "./containers/Search";
import Info from "./containers/Info";


import configureStore from "./store/ConfigureStore";
import { Provider } from "react-redux"; //We"ll use the Redux Provider to make the store available to any components that we choose to connect to it.

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} router={this} >
                <IndexRoute component={Body} />
                <Route path="/word/:wordId" component={Word} />
                <Route path="/video/:videoName/:categoryId/:title" component={Video} />
                <Route path="/search/:searchStr" component={Search} />
                <Route path="/info" component={Info} />
            </Route>
        </Router>
    </Provider>,
    document.getElementsByClassName("fgAppHolder")[0]
);


