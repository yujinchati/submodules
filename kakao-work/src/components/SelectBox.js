import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

/*
* selectBox 기본
* @param {Array} 배열 : 필수
* @param {label} label 추가
* @param {name} label연결을 위한 name 
* @param {areaLabel} areaLabel 추가

*/ 

const StyledRadio = styled.select`
width:100%;
height:100%;
font-size:1rem
`;

const Label = styled.label`
    padding-right:20px
`;

const SelectBox = ({Array,label,name,areaLabel,children}) => {
    return (
        <>
        {label ? <Label htmlFor={name}>{children}</Label> :""}
            <span className={classNames(`inp-box`)}>
                <StyledRadio id={name} area-label={areaLabel}>
                {Array && Array.map((array,index)=>(
                    <option key={index} value={array.value}>{array.text}</option>
                ))}
                </StyledRadio>
            </span>
        </>
    );
};
SelectBox.defaultProps = {
    Array : [],
}
export default SelectBox;