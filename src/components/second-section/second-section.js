import "./second-section.scss";

import emojiDollars from '../../images/emoji-dollars.png';
import emojiGlasses from '../../images/emoji-glasses.png';
import emojiStars from '../../images/emoji-stars.png';
import emojiTongua from '../../images/emoji-tongue.png';

const arrayEmojiImages = [emojiStars, emojiTongua, emojiDollars, emojiGlasses];

const SecondSection = () => {
    return (
        <section className="second-section">
            <div className="second-section__center-block">
                <h2>Что даст тебе обучение?</h2>
                <div className="center-block__item">
                    <div className="item__container">
                        <img className="center-block__image" src={arrayEmojiImages[0]} alt="emoji"/>
                        <p>Откроешь свой первый криптокошелек и научишься с ним работать</p>
                    </div>
                    <div className="item__container-bottom"></div>
                </div>
                <div className="center-block__item">
                    <div className="item__container">
                        <img className="center-block__image" src={arrayEmojiImages[1]} alt="emoji"/>
                        <p>Поймёшь, как выбирать правильные дропы</p>
                    </div>
                    <div className="item__container-bottom"></div>
                </div>
                <div className="center-block__item">
                    <div className="item__container">
                        <img className="center-block__image" src={arrayEmojiImages[2]} alt="emoji"/>
                        <p>Построишь план по быстрому приумножению заработанных средств</p>
                    </div>
                    <div className="item__container-bottom"></div>
                </div>
                <div className="center-block__item">
                    <div className="item__container">
                        <img className="center-block__image" src={arrayEmojiImages[3]} alt="emoji"/>
                        <p>Узнаешь кто такие холдеры и флипперы</p>
                    </div>
                    <div className="item__container-bottom"></div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;