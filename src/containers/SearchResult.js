import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Card from "../components/Card";


class SearchResult extends React.Component {
constructor(props){
    super(props);
    var mainJson = jsonLocalCall("main").categories;


    var words = mainJson.reduce((acc, cur) => {
                                            return acc.concat(cur.words)
                                         }, []);

    this.state = {items : words};
  }


 filterList(event){
     var mainJson = jsonLocalCall("main").categories;
     var words =  mainJson.reduce((acc, cur) => {
                                              return acc.concat(cur.words)
                                           }, []);
            var updatedList = words.filter(function(item){
              return item.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: updatedList});
    }
    render() {




        return (
         <div className="SearchResult">
               <input type="text" className="searchInput" placeholder="Search" onChange={this.filterList}/>
               {this.state.items.name}
         </div>
        )
    }
}

export default SearchResult;
