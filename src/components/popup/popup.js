import React, { Component } from "react";
import "./popup.scss";

export default class Popup extends Component {
    render() {
        return (
            <div className="popup__background">
                <div className="popup">
                    <div className="backlight"></div>
                    <div className="popup__close" onClick={this.props.closePopup}></div>
                    <div className="popup__container">
                        <h3 className="popup__title">Начни прямо сейчас!</h3>
                        <p className="popup__text">
                            Получи все нужные навыки для заработка<br/> на NFT всего
                            за 28 дней!
                        </p>
                        <form className="popup__form" autoComplete="on">
                            <input className="popup__input" type="email" name="email" placeholder="Ваш email"/>
                            <div className="popup__button">
                                <button className="popup_green-button green-button">Оплатить</button>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        );
    }
}
