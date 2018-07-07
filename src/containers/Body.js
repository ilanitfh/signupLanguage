import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Tile2 from "../components/Tile2";
import {rootTranslateX} from "../utils/Utils";

var tilesElements;
class Body extends React.Component {
    constructor(props){
        super(props);

        let mainJson = jsonLocalCall("main");
        if (!tilesElements) {
            tilesElements = mainJson.categories.map((category) =>
                <Tile2 key={category.id} tileName={category.name} tileUrl={"/word/" + category.id}
                    imageName={category.imageName} themeFlavor={category.id-1}/>);
        }
 
        this.state = {tilesElements: tilesElements}
         this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    updateDimensions() {
        this.setState({width:window.innerHeight})
   }
    
    componentWillMount(){
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    } 

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {

        let tilesElements = this.state.tilesElements;

        //calculate best width:
        let tileH = 175, tileW = 220;
        let rows = Math.max(Math.floor( (window.innerHeight - 160) / tileH), 1);
        let cols = Math.ceil(tilesElements.length / rows)
        let width = cols * tileW;

        return (
            <div className="App-intro">
                <div className="centerWidthAlign">
                    <div className="fgTileContainer" style={{width:width+"px", transform:'translateX(' + rootTranslateX + 'px)'}}>
                        {tilesElements}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;



