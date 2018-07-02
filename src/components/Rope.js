import React from "react";

import "../css/rope.css";

class Rope extends React.Component {
    render() {
        return (
            <div>
                <div className="rope"></div>
                <div className="rope-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Rope;