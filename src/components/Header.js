import React from "react";
import '../css/App.css';
import '../css/style.css';

class Header extends React.Component {
    render() {
        return (
          <issie-shell theme="blue" id="page1" className="page">
              <button slot="start-bar" className="zmdi zmdi-info-outline"></button>
              <button slot="start-bar" className="zmdi zmdi-menu"></button>
              <h1 slot="title">שפת הסימנים - קטגוריות</h1>
              <issie-search theme="blue" slot="end-bar"></issie-search>

          </issie-shell>
        )
    }
}

export default Header;

