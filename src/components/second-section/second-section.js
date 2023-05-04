import "./second-section.scss";
import "./decor.scss";

import emojiDollars from '../../images/emoji-dollars.png';
import emojiGlasses from '../../images/emoji-glasses.png';
import emojiStars from '../../images/emoji-stars.png';
import emojiTongua from '../../images/emoji-tongue.png';

const arrayEmojiImages = [emojiStars, emojiTongua, emojiDollars, emojiGlasses];

const SecondSection = () => {

    return (
        <section className="second-section">
            <div className="wrapper">
                <div className="second-section__center-block">
                    {/* Decor items start */}
                    <div className="second-section__backlight second-section__backlight_left"></div>
                    <div className="second-section__backlight second-section__backlight_right"></div>
                    <div className="ball-blue decor"></div>
                    <div className="ball-normal decor"></div>
                    <div className="ball-shadow decor"></div>
                    {/* Decor items end */}
                    <h2 className="second-section__title">Что даст тебе обучение?</h2>
                    <div className="second-section__grid">
                        <div className="grid__item">
                            <div className="item__container">
                                <img className="center-block__image" src={arrayEmojiImages[0]} alt="emoji"/>
                                <div>Откроешь свой первый криптокошелек и научишься с ним работать</div>
                            </div>
                            <div className="item__container-bottom"></div>
                        </div>
                        <div className="grid__item">
                            <div className="item__container">
                                <img className="center-block__image" src={arrayEmojiImages[1]} alt="emoji"/>
                                <div>Поймёшь, как выбирать правильные дропы</div>
                            </div>
                            <div className="item__container-bottom"></div>
                        </div>
                        <div className="grid__item">
                            <div className="item__container">
                                <img className="center-block__image" src={arrayEmojiImages[2]} alt="emoji"/>
                                <div>Построишь план по быстрому приумножению заработанных средств</div>
                            </div>
                            <div className="item__container-bottom"></div>
                        </div>
                        <div className="grid__item">
                            <div className="item__container">
                                <img className="center-block__image" src={arrayEmojiImages[3]} alt="emoji"/>
                                <div>Узнаешь кто такие холдеры и флипперы</div>
                            </div>
                            <div className="item__container-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;