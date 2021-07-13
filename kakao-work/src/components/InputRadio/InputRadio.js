import React from 'react';
import classNames from 'classnames';
import './InputRadio.scss';

/*
* Box 선택형 RadioBox
* @param {Array} 배열 : 필수
* @param {name} radio 연결을 위한 name 받아오기 : 필수
* @param {className} class 추가 
*/ 

const InputRadio = ({Array,className,name}) => {
    return (
        <>
        {Array && Array.map((array,index)=>(
        <div className={classNames(`form`,className)} key={index}>
            <input type="radio" name={name} id={array.name}></input>
            <label htmlFor={array.name}>{array.text}</label>
        </div>
        ))}
        </>
    );
};
InputRadio.defaultProps = {
    Array : [],
}
export default InputRadio;