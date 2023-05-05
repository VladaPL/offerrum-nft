import React, { Component } from "react";
import logo from "../../images/logo-ntf.svg";
import "./header.scss";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="header__container">
                        <div className="header__backlight"></div>
                        <div className="heder__logo logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">Главная</li>
                                <li className="nav__item">Что даст обучение</li>
                            </ul>
                        </nav>
                        <button className="header__button">Личный кабинет</button>
                    </div>
                </div>
            </header>
        );
    }
}
