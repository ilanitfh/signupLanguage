import React from "react";
import '../css/shell.css';

function Slot({ children, slot }) {
    let slottedChildren = [];
    let id =1;
    // Iterate over children to find the slot needed
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) { // Check that it is a valid react element.
        return; // Return since we can't do anything with a child without props.
      }
      
      if (child.props['slot'] === slot) { //Verify it matches the slot we are looking for.
        let clone = React.cloneElement(child, {"key":slot + id++});
 
        slottedChildren.push(clone); // Clone it and set it to the slotted child
      }
    });
    return slottedChildren;
}

class Shell extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
        <div className="shellhost">
            <div className="shellTopBlueBar"/>
            <div className="shellheader" theme={this.props.theme}>
                <div className="shellheaderTop">
                    <div className="startBar">
                        <Slot slot="start-bar">{this.props.children}</Slot>
                    </div>
                    <div className="shelltitle">
                        <Slot slot="title">{this.props.children}</Slot>
                    </div>
                    <div className="endBar">
                        <Slot slot="end-bar">{this.props.children}</Slot>
                    </div>
                </div>
            </div>
            
            <ul className="projectors">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="shellmain">
                <aside className="prev">
                    <Slot slot="prev">{this.props.children}</Slot>
                </aside>
                <Slot slot="body">{this.props.children}</Slot>
                <aside className="next">
                    <Slot slot="next">{this.props.children}</Slot>
                </aside>
            </div>
        </div>
        );
    }
}

export default Shell;
