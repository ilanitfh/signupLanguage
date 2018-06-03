import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import {Link} from "react-router";

class Body extends React.Component {
    render() {
        let mainJson =  jsonLocalCall("main");
        return (
            <div className="App-intro">
                    {
                        mainJson.categories.map(function(category){
                            return <div key={category.id} className="rtl"><Link to={"/word/" + category.id}>{category.name}</Link></div>
                        })
                    }
            </div>
        )
    }
}

export default Body;



