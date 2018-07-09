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
        let searchClassName = this.props.isMobile? "": "sameLine";
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

 