import React from 'react'; 
import classNames from 'classnames';
import '../Button/Button.scss';

/*
* 버튼 
* @param {type} 타입 
* @param {primary} primary 타입 
* @param {children} 버튼 내용 
* @param {size} 사이즈 내용 
*/ 

const Button = ({ 
    type, 
    primary,
    children, 
    size,
    ...rest
}) => { 
    return (     
    <button type={type} className={classNames(`btn`,size,primary)} {...rest}> {children} </button> 
    ); 
}; 

Button.defaultProps = {
    type : 'button',
    size : 'medium'
}

    
export default Button;
