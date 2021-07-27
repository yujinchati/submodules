import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5px 0;
    & + & {margin-top:0}
`;
const StyledSwitch = styled.div`
    position:relative;
`;
const Label = styled.label`
    display:block;
    position:relative;
    width:56px;
    height:28px;
    font-size:0;
    border-radius:14px;
    background:#adb5bd;
    cursor:pointer;
    &:before{
        content:'';
        position:absolute;
        right:12px}
    &:after{
        content:'';
        position:absolute;
        width:24px;
        height:24px;
        top:2px;
        left:3px;
        border-radius:50%;
        background:#fff;
        transition: all .3s;}
`;
const Input = styled.input`
    position:absolute;
    width:1px;
    height:1px;
    appearance:none;
    &:checked + label{background:#f40000}
    &:checked + label:before{left:12px;right:auto}
    &:checked + label:after{left:auto;right:3px}
`;

/*
* 버튼 
* @param {id} label과 연결을 위한 id : 필수
* @param {tit} switch 제목
* @param {name} name 선언 
* @param {children} switch 내용 
*/ 

const Switch = ({id,tit,name,children}) => {
    return (
        <>
        <StyledWrap>
            <span>{tit}</span>
            <StyledSwitch>
                <Input type="checkbox" id={id} name={name} />
                <Label htmlFor={id}>{children}</Label>
            </StyledSwitch>
        </StyledWrap>
        </>
    );
};
export default Switch;