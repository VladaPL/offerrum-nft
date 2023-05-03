import "./first-section.scss";
import manBig from "../../images/man-big.png";
import GreenButton from "../GreenButton/green-button";

const FirstSection = () => {
    return (
        <section className="first-section">
            <div className="wrapper">
            <div className="first-section__right-block">
                    <img className="first-section__image" src={manBig} alt="man" />
                </div>
                <div className="first-section__left-block first-section__block">
                    <p className="first-section__top-text">
                        Не упусти<br/> возможность войти<br/> в <b>прибыльную нишу</b>
                    </p>
                    <p className="first-section__bottom-text">
                        Получи все нужные навыки для заработка<br/> на NFT всего
                        за 28 дней!
                    </p>
                    <GreenButton text="Начать зарабатывать на NFT" />
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
