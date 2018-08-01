import React from "react";
import "../css/search.css";
import { isNarrow } from "../utils/Utils";

class SearchInput extends React.Component {
    constructor(props){
        super(props);
        if (props.onChange !== undefined) {
            this.handleChange = props.onChange;
        }
    }

    handleChange (){}

    render() {
        let searchClassName = isNarrow()? "": "sameLine";
        return (
            <div slot={this.props.slot} className={"search " + searchClassName}>
                <input ref="input" type="search" onChange={this.handleChange}
                onFocus={this.preventKeyBoardScrollApp}/>
            </div>
        );
    }
    preventKeyBoardScrollApp() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
}
export default SearchInput;

 