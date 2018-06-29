import React from "react";
import "../css/search.css";

class SearchInput extends React.Component {
    constructor(props){
        super(props);
        if (props.onChange !== undefined) {
            this.handleChange = props.onChange;
        }
    }

    handleChange (){}

    render() {
        return (
            <div className="search" slot={this.props.slot}>
                <input type="search" onChange={this.handleChange}/>
            </div>
        );
    }
}
export default SearchInput;

 