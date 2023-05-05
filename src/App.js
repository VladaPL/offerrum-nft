import React, { Component } from "react";
import "./App.scss";
import Header from "./components/header/header";
import FirstSection from "./components/first-section/first-section";
import SecondSection from "./components/second-section/second-section";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <FirstSection />
                    <SecondSection />
                </main>
            </div>
        );
    } 
}
