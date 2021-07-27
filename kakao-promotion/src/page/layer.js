import React from 'react';
import styles from '../styles/Promotion.scss';
import classNames from 'classnames/bind';
import imgLayerTop from '../assets/bg-promo-top.jpg';
import imgLayerBottom from '../assets/bg-promo-bottom.jpg';
import imgLayerBtn from '../assets/btn-trasfer.png';

const cx = classNames.bind(styles);

const Layer = ({onClick ,isLayer}) => {
    return(
        <div className={cx('layer-event',isLayer?"layer-on" :"")}>
            <div className={cx('top')}>
                <a href="/" className={cx('link-close')} onClick={onClick}><span className={cx('blind')}>레이어 닫기</span></a>
                <h2 className={cx('blind')}>이벤트 계좌로 1원 보내봐!</h2>
                <img src={imgLayerTop} alt="" />
            </div>
            <div className={cx('bottom')}>
                <p className={cx('blind')}>송금할 1원이 없다면?</p>
                <a href="/" className={cx('link-coupon')}>1원 쿠폰 받기</a>
                <ul className={cx('list-caution')}>
                    <li>송금 후, 즉시 당첨확인 가능&#38; 1원 환불<em>카카오페이 플러스 친구 메시지로 안내</em></li>
                    <li>매일 10회 참여 가능 / 매주 경품 변경</li>
                    <li>카톡 최신 버전에만 참여 가능 <a href="/">카톡 업데이트</a></li>
                </ul>
                <img src={imgLayerBottom} alt="" />
            </div>
            <a href="/" className={cx('btn-transfer')}><img src={imgLayerBtn} alt="송금하기" /></a>
        </div>
    )};

export default Layer;