import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const Label = styled.label`
    font-size:1rem;
    margin:19px 0 8px
`;

/*
* 기본 Input
* @param {type} 타입 
* @param {name} input name
* @param {placeholder} placeholder 
* @param {className} class 추가 

*/ 
const Input = ({label,children,name,type,placeholder,...rest}) => {
    return (
        <>
        {label ? <Label htmlFor={name}>{label}</Label> :""}
        <span className={classNames(`inp-box`)}>
            <input type={type} id={name} placeholder={placeholder} {...rest} />
        </span>
        </>
    );
};

Input.defaultProps = {
    type : 'text'
}

export default Input;
