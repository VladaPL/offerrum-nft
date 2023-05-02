import "./first-section.scss";
import manBig from "../../images/man-big.png";

const FirstSection = () => {
    return (
        <section className="first-section">
            <div className="first-section__left-block first-section__block">
                <p className="first-section__top-text">
                    Не упусти возможность войти в прибыльную нишу
                </p>
                <p className="first-section__bottom-text">
                    Получи все нужные навыки для заработка на <h1>NFT</h1> всего
                    за 28 дней!
                </p>
            </div>
            <div className="first-section__right-block first-section__block">
                <img className="first-section__image" src={manBig} alt="man" />
            </div>
        </section>
    );
};

export default FirstSection;
