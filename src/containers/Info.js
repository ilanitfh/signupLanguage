import React from "react";
import '../css/info.css';

class Info extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
    
        let infoText ="IssieSign is an app for learning how to sign basic needs and ideas based on the Israeli sign language (ISL), developed especially for young children with Complex communication needs.\n The app developed through the collaboration of The Technology Center of Beit Issie Shapiro and SAP Labs Israel."+
        "\nWith simple, clean and tailored-made design for easy access and navigation for young children, IssieSign can be a significant mean of communication and can help children with Complex communication needs express themselves. "+
        "\n\nCustomizability Features:"+
        "\nIn the App about 600 videos"+
        "\nEach sign appears in the video along with the spoken word, the written word, and with a  familiar symbol, used in special education schools for communication - SymbolStix"+
        "\nCategories are classified by color for quick and efficient use"+
        "\nEach video is structured according to the first stages of development of language and speech – One word phase and Two words phase "+
        "\n\nIssieSign, is designed to meet needs we have identified in our work at Beit Issie Shapiro with people with disabilities. It is one of a series of apps we have created intended to improve participation and quality of life.  "+
        "\n\nThe Technology Center at Beit Issie Shapiro serves as a leading hub for promoting innovation and entrepreneurship in the field of Assistive Technology (AT), bringing more accessible and affordable solutions to people with disabilities. We provide consultation and training services to families and professionals and consultation and support to developers and entrepreneurs helping them create apps and products that are accessible to a wider audience including people with disabilities. "+
        "\n\nCopyright SymbolStix, LLC. 2018. All rights reserved. Used with permission.";
        return (
            
            <div className="info">
                {infoText}
            </div>
        )
    }
}

export default Info;
