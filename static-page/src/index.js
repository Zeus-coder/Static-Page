import React from "react";
import ReactDOM from "react-dom";

import Footer from "./Footer";
import PageContent from "./PageContent";
import Header from "./Header";
import '../src/App.css';




const myDiv = document.getElementById("root");

function StaticPage () {
    return (
    <div>
        <Header/>
        <PageContent/>
        <Footer/>
    </div>
    )
}

ReactDOM.render(<StaticPage/>, myDiv);

