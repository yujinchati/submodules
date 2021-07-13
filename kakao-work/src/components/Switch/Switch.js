import React from 'react';
import classNames from 'classnames';
import '../Switch/Switch.scss';

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
        <div className={classNames(`switch-comm`)}>
            <span>{tit}</span>
            <div className={classNames(`switch`)}>
                <input type="checkbox" id={id} name={name} />
                <label htmlFor={id}>{children}</label>
            </div>
        </div>
        </>
    );
};
export default Switch;