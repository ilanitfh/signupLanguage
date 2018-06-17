import React from "react";
import '../css/App.css';
import '../css/style.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <div className="headerElement">
                    </div>
                    <div className="headerElement">
                        <h1 className="App-title">
                            שפת הסימנים - קטגוריות
                        </h1>
                    </div>
                    <div className="headerElement">
                        //
                        <issie-search theme="blue" slot="end-bar"></issie-search>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;

