import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navibar.css';
import './NavibarM.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeItem } from '../store/modules/itemSlice';

const Navibar = ({  }) => {
    const selectedOption = useSelector(state => state.item.selectedOption); // Redux 스토어의 selectedOption 값을 가져옵니다.
    const menuColor = useSelector(state => state.item.menuColor); // Redux 스토어의 selectedOption 값을 가져옵니다.
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.

    const handleMouseEnter = (option) => {
        dispatch(changeItem(option));// 해당 옵션으로 상태 변경
    };
    const handleMouseLeave = () => {
        dispatch(changeItem('')); // 상태 초기화
    };
    

    return (
        <nav className={`nav ${selectedOption ? 'hovered' : ''}`} >
            <ul>
                <li className={`${selectedOption==='product' ? 'hovered' : ''} ${menuColor==='product'?'on':''}`}
                    onMouseEnter={()=>handleMouseEnter('product')}
                    onMouseLeave={handleMouseLeave}>Product</li>
                <li className={`${selectedOption==='company' ? 'hovered' : ''} ${menuColor==='product'?'on':''}`}
                    onMouseEnter={()=>handleMouseEnter('company')}
                    onMouseLeave={handleMouseLeave}>Company</li>
                <li className={`${selectedOption==='reference' ? 'hovered' : ''} ${menuColor==='product'?'on':''}`} 
                    onMouseEnter={()=>handleMouseEnter('reference')}
                    onMouseLeave={handleMouseLeave}>Reference</li>
                <li className={`${selectedOption==='contact' ? 'hovered' : ''} ${menuColor==='product'?'on':''}`} 
                    onMouseEnter={()=>handleMouseEnter('contact')}
                    onMouseLeave={handleMouseLeave}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navibar;