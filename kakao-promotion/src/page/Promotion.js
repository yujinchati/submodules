import React from 'react';
import useScroll from '../util/useScroll';
import styles from '../styles/Promotion.scss';
import classNames from 'classnames/bind';
import imgTop from '../assets/bg-promo-tit.png';
import imgSpark from '../assets/img-spark.png';
import imgSparkR from '../assets/img-spark-right.png';
import imgNeonTop from '../assets/img-neon-top.png';
import imgNeonBottom from '../assets/img-neon-bottom.png';
import imgNeonO from '../assets//img-neon-bottom-o.png';
import imgMoney from '../assets/img-money.png';
import imgHandleft from '../assets/img-hand-left.png';
import imgHandRight from '../assets/img-hand-right.png';
import imgWon from '../assets/img-won.png';
import imgReward from '../assets/img-reward.png';
import imgSns from '../assets/img-sns.png';
import imgKakao from '../assets/img-sns-ktalk.png';
import imgStory from '../assets/img-sns-kstory.png';
import imgFacecook from '../assets/img-sns-facebook.png';
import imgTwit from '../assets/img-sns-twit.png';
import imgJoin from '../assets/btn-join.png';

const cx = classNames.bind(styles);
const Promotion = ({onLayer ,isLayer}) => {
    const {position,spark,scrollActive} = useScroll();
    const handleLayer = (e) =>{
        onLayer(true);
    }
    return(
        <>
    <div className={cx('promo',isLayer? "hide" : "")}>
        <header className={cx('head-promo')}>
            <div className={cx('blind')}>
                <h1>카카오페이 송금</h1>
                <h2>10주간의 현금스웩</h2>
                <p>Show me the money</p>
            </div>
        </header>
        <main>
            <div className={cx('tit-event')}>
                <div className={cx('blind')}>
                    <h2>Drop the Money</h2>
                    <em>송금만해도 현금이 쏟아진다.</em>
                </div>
                <span className={cx('neon-top')}>
                    <img src={imgNeonTop} className={cx('img-neon-top')} alt="" />
                </span>
                <span className={cx('neon-spark')}>
                    <span className={cx('spark-left',spark?'start' :'')}><img src={imgSpark} alt="" /></span>
                    <span className={cx('spark-right',spark?'start' :'')}><img src={imgSparkR} alt="" /></span>
                </span>
                <span className={cx('neon-bottom')}><img src={imgNeonBottom} alt="" /></span>
                <span className={cx('neon-o')}><img src={imgNeonO} alt="" /></span>
                <img src={imgTop} alt="drop the money" />
            </div>
            <section>
                <div className={cx('cont-event')}>
                    <strong className={cx('blind')}>총 1억원</strong>
                    <div className={cx('money')}>
                        <span className={cx('img-money')}><img src={imgMoney} alt="돈 이미지" /></span>
                        <div className={cx('event-hand')}>
                            <div className={cx('inner-event-hand')}>
                                <span className={cx('img-left')}><img src={imgHandleft} alt="왼쪽손" /></span>
                                <img src={imgWon} className={cx('img-won')} alt="총1억원" />
                                <span className={cx('img-right')}><img src={imgHandRight} alt="오른쪽손" /></span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('event-reward')}>
                        <div className={cx('blind')}>
                            <strong>1주차 :6월 30일~ 7월 6일</strong>
                            <p>추첨을 통해 카카오머니를 드립니다.</p>
                            <dl>
                                <dt>백만원</dt><dd>1명</dd>
                                <dt>1만원</dt><dd>100명</dd>
                                <dt>1천원</dt><dd>1천명</dd>
                                <dt>붸액원</dt><dd>15만명</dd>
                            </dl>
                        </div>
                        <img src={imgReward} alt="1주차 리워드" />
                    </div>
                    <div className={cx('event-share')}>
                        <strong className={cx('blind')}>이벤트 공유하기</strong>
                        <a href="/" className={cx('link-sns')}><img src={imgKakao} alt="카카오톡" /></a>
                        <a href="/" className={cx('link-sns')}><img src={imgStory} alt="카카오스토리" /></a>
                        <a href="/" className={cx('link-sns')}><img src={imgFacecook} alt="카카오스토리" /></a>
                        <a href="/" className={cx('link-sns')}><img src={imgTwit} alt="카카오스토리" /></a>
                        <span className={cx('bg-share',scrollActive?"twickle" :"")}><img src={imgSns} className={cx('bg-sns')} alt="친구들도 우리와 함께 갑시다." /></span>
                    </div>
                </div>
            </section>
            <button type="button" className={cx('btn-join')} onClick={handleLayer}><img src={imgJoin} alt="참여하기" /></button>
        </main>
        <span className={cx('bg-coin')}></span>
        <span className={cx('bg-coin-top')} style={{transform:`translateY(${-position}px)`}}></span>
        <span className={cx('bg-coin-middle')} style={{transform:`translateY(${-position}px)`}}></span>
        <span className={cx('bg-coin-bottom')} style={{transform:`translateY(${-position}px)`}}></span>
    </div>
    </>
    )};

export default Promotion;