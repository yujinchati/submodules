import React from 'react';
import classNames from 'classnames';
import './SelectBox.scss';

/*
* selectBox 기본
* @param {Array} 배열 : 필수
* @param {label} label 추가
* @param {name} label연결을 위한 name 
* @param {areaLabel} areaLabel 추가

*/ 


const SelectBox = ({Array,label,name,areaLabel,children}) => {
    return (
        <>
        {label ? <label htmlFor={name} className={classNames(`select-label`)}>{children}</label> :""}
        <div className={classNames(`select-comm`)}>
            <span className={classNames(`form`)}>
                <select id={name} area-label={areaLabel}>
                {Array && Array.map((array,index)=>(
                    <option key={index} value={array.value}>{array.text}</option>
                ))}
                </select>
            </span>
        </div>
        </>
    );
};
SelectBox.defaultProps = {
    Array : [],
}
export default SelectBox;