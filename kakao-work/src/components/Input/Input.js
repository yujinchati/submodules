import React from 'react';
import classNames from 'classnames';

/*
* 기본 Input
* @param {type} 타입 
* @param {name} input name
* @param {placeholder} placeholder 
* @param {className} class 추가 

*/ 

const Input = ({type,placeholder,className,...rest}) => {

    return (
        <span className={classNames(`form`)}>
            <input type={type} className={classNames(`inp-comm`,className)} placeholder={placeholder} {...rest} />
        </span>
    );
};

Input.defaultProps = {
    type : 'text'
}

export default Input;
