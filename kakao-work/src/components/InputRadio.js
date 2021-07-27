import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

/*
* Box 선택형 RadioBox
* @param {Array} 배열 : 필수
* @param {name} radio 연결을 위한 name 받아오기 : 필수
* @param {className} class 추가 
*/ 

const StyledRadio = styled.div`
    position:relative;
    width:100%;
    padding:10px 0;
    text-align:center;
    border:0 none;
    font-size: 1rem;
    &:last-child input{border-right:1px solid #dadada}
`;

const Label = styled.label`
    position:relative
`;

const Input = styled.input`
    position:absolute;
    top:0;left:0%;
    margin:0;
    border:1px solid #dadada;
    border-right:0 none;
    &:checked{border-color:transparent;background:#f40}
    &:checked + label{color:#fff}
`;

const InputRadio = ({Array,name}) => {
    return (
        <>
        {Array && Array.map((array,index)=>(
        <StyledRadio className={classNames('inp-box')} key={index}>
            <Input type="radio" name={name} id={array.name}></Input>
            <Label htmlFor={array.name}>{array.text}</Label>
        </StyledRadio>
        ))}
        </>
    );
};
InputRadio.defaultProps = {
    Array : [],
}
export default InputRadio;