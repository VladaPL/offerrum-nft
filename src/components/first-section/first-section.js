import React, { Component } from "react";
import "./first-section.scss";
import "../GreenButton/green-button.scss";
import manBig from "../../images/man-big.png";
import Popup from "../popup/popup";

export default class FirstSection extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    render() {
        return (
            <section className="first-section">
                <div className="wrapper">
                    <div className="first-section__right-block">
                        <img
                            className="first-section__image"
                            src={manBig}
                            alt="man"
                        />
                    </div>
                    <div className="first-section__left-block first-section__block">
                        <p className="first-section__top-text">
                            Не упусти
                            <br /> возможность войти
                            <br /> в <b>прибыльную нишу</b>
                        </p>
                        <p className="first-section__bottom-text">
                            Получи все нужные навыки для заработка
                            <br /> на NFT всего за 28 дней!
                        </p>
                        <div className="first-section__button">
                            <button
                                className="first-section__green-button green-button"
                                onClick={this.togglePopup.bind(this)}
                            >
                                Начать зарабатывать на NFT
                            </button>
                        </div>
                    </div>
                </div>
                {this.state.showPopup ? (
                    <Popup closePopup={this.togglePopup.bind(this)} />
                ) : null}
            </section>
        );
    }
}
