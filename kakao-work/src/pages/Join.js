import React, { Component } from 'react';
import Button from '../components/Button'
import Input from '../components/Input';
import InputRadio from '../components/InputRadio';
import Selectbox from '../components/SelectBox';
import Switch from '../components/Switch';

import './Join.scss';

class Join extends Component {
    render() {
        const genderArr = [
            { name: 'Male', text: '남자' },
            { name: 'Female', text: '여자' },
        ];
        const yearsArr = [
            { name: '2021', text: '2021' },
            { name: '2020', text: '2020' },
        ];
        const monthArr = [
            { name: '1', text: '1' },
            { name: '2', text: '2' },
        ];
        const dayArr = [{ name: '1', text: '1' },{ name: '2', text: '2' }];
        const phoneArr = [{ name: '010', text: '010' },{ name: '016', text: '016' },{ name: '017', text: '017' }];
        return (
            <div className={'wrap-join'}>
                <h1>회원가입</h1>
                <form>
                    <div className="grid"><Input name="inpId" placeholder="아이디" /></div>
                    <em className="wrong">아이디를 입력해주세요.</em> {/* 예시 */}
                    <div className="grid"><Input type="password" name="inpPw" placeholder="비밀번호" /></div>
                    <div className="grid gender">
                        <InputRadio Array={genderArr} className={'check-comm'} name="checkGender" />
                    </div>
                    <div className="grid birth">
                        <Selectbox Array={yearsArr} label={true} name="selectYear" areaLabel="년도">생일</Selectbox>
                        <Selectbox Array={monthArr} name="selectMonth" areaLabel="달" />
                        <Selectbox Array={dayArr} name="selectDay" areaLabel="일" />
                    </div>
                    <div className="grid phone">
                        <Selectbox Array={phoneArr} label={true} name="selectPhone" areaLabel="전화번호">전화</Selectbox>
                        <Input type="text" name="inpPhone" className="inp-comm" />
                        <Button type="button" size="small">인증</Button>
                    </div>
                    <Switch id="switchAgree" name="inpAgree" tit="이용약관 동의">동의하기</Switch>
                    <Switch id="allAgree" name="inpAll" tit="모든약관 내용에 동의합니다.">동의하기</Switch>
                    <div className="btn-submit">
                        <Button type="submit" size="large" primary="primary">가입하기</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Join;