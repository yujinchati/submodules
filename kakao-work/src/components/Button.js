import React from 'react'; 
import styled, {css} from 'styled-components';

const colorStyles = css`
${props => props.primary && css`
    border: 1px solid #f40;
    border-color: #f40;
    background-color: #f40;
`}
`;

const sizes = {
  large: {
    height: '3.75rem',
    fontSize: '1.25rem',
    lineHeight: '3.75rem'
  },
  medium: {
    height: '1rem',
    fontSize: '1rem',
    lineHeight: '1rem'
  },
  small: {
    height: '2.375rem',
    fontSize: '0.875rem',
    lineHeight: '2.375rem'
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    line-height: ${sizes[size].lineHeight};
  `}
`;

const StyledButton = styled.button`
    box-sizing: border-box;
    display: block;
    width:100%;
    padding: 0 12px;
    border: 1px solid #424342;
    border-radius: 0;
    background-color:#424342;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    /* 크기 */
    ${sizeStyles}
  
    /* 색상 */
    ${colorStyles}
`;


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
    <StyledButton type={type} size={size} primary={primary} {...rest}> {children} </StyledButton> 
    ); 
}; 

Button.defaultProps = {
    type : 'button',
    size : 'medium'
}

    
export default Button;