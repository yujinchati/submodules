import React, { Component } from 'react';
import Button from '../components/Button'
import Input from '../components/Input';

class Login extends Component {
    render() {
        return (
            <div className={'wrap-join'}>
                <h1>로그인</h1>
                <form>
                    <div className="grid"><Input name="inpId" placeholder="아이디" /></div>
                    <div className="grid"><Input type="password" name="inpPw" placeholder="비밀번호" /></div>
                    <div className="btn-submit">
                        <Button type="submit" size="large" primary="primary">로그인</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;