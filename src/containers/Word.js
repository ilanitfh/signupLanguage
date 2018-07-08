import React from "react";
import '../css/App.css';
import {jsonLocalCall} from "../apis/JsonLocalCall";
import Card2 from "../components/Card2";
import {wordsTranslateX, saveWordTranslateX, getTheme} from "../utils/Utils";

class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getState(this.props);
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    updateDimensions() {
        saveWordTranslateX(0);
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
    getState(props) {
        var state;
        if (props.words === undefined) {
            let mainJson = jsonLocalCall("main");
            let wordId = this.props.routeParams.wordId;
            
            mainJson.categories.forEach((category) => {
                if (category.id === wordId && category.words) {
                    state = {words:category.words, categoryId:category.id};
                }
            });

        } else {
            state = {words:props.words, categoryId:"1"}
        }
        return state;
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getState(newProps));
    }

    render() {
        var wordsElements = this.state.words.map((word) => {
                return <Card2 key={word.id} cardName={word.name} cardUrl={"/video/" + word.videoName + "/" + this.state.categoryId}
                                imageName={word.imageName} imageName2={word.imageName2} theme={getTheme(this.state.categoryId)} />
            });

        //calculate the average width, while considering double images
        var elementWidths = this.state.words.map((word) => {
            return word.imageName2 ? 300 : 220;
        });
        let width = 0;
        if (elementWidths.length > 0) {
            let widthSum = elementWidths.reduce(function(a, b) { return a + b; });
            let tileW = widthSum / elementWidths.length;

            //calculate best width:
            let tileH = 200;
            let rows = Math.max(Math.floor( (window.innerHeight - 110) / tileH), 1);
            let cols = Math.ceil(wordsElements.length / rows)
            width = cols * tileW;
        }
        width = Math.max(width, window.innerWidth);

 //       console.log("h:"+window.innerHeight+ ", w:"+ window.innerWidth+ ", cols: "+ cols + ", rows:" + rows + ", width:"+width)

        return (
        <div className="App-intro">
            <div className="centerWidthAlign">
                <div className="fgTileContainer" style={{width:width+"px", transform:'translateX(' + wordsTranslateX + 'px)'}}>
                    {wordsElements}
                </div>
            </div>
        </div>

        )
    }
}

export default Word;
