import React, { useEffect, useState } from 'react';
import Navibar from '../header/Navibar';
import './Header.css';
import './HeaderM.css';
import { IoMenuOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeItem, changePageTt } from '../store/modules/itemSlice';


const Header = () => {
    const [imgUrl, setImgUrl] = useState('img01'); // useState로 imgUrl 상태를 관리
    const selectedOption = useSelector(state => state.item.selectedOption); 
    const detailOption = useSelector(state => state.item.detailOption); 
    const pageTitle = useSelector(state => state.item.pageTitle); 
    const menuColor = useSelector(state => state.item.menuColor); 
    const dispatch = useDispatch();
    const handleMouseEnter = (option) => {
        dispatch(changeItem(option));// 해당 옵션으로 상태 변경
    };
    
    const onClickColor = (option) => {
        dispatch(changeColor(option));// 해당 옵션으로 상태 변경
        dispatch(changePageTt(''));
    };
    useEffect(()=>{
        if(selectedOption===''&&detailOption===''&&pageTitle===''){
            setImgUrl('img');
        } else {
            setImgUrl('img');
        }
    },[selectedOption,detailOption,pageTitle])

    return (
        <header className={`header ${selectedOption ? 'hovered' : ''} 
        ${menuColor==='product'?'on':
            menuColor==='company'?'on':
            menuColor==='reference'?'on':
            menuColor==='contact'?'on':''
        }`} >
            <Link to="/"  onClick={()=>onClickColor('logo')}>
                <img className="logo_img" src={`/images/logo_${imgUrl}.png`}/>
            </Link>
            <Navibar/>
            
            <IoMenuOutline className={`menu_btn ${selectedOption ? 'hovered' : ''} 
            ${menuColor==='product'?'on':
            menuColor==='company'?'on':
            menuColor==='reference'?'on':
            menuColor==='contact'?'on':''
            }`} onClick={()=>{
                handleMouseEnter('on');
                
                }}
                
                onTouchStart={() => {
                    handleMouseEnter('on');
                    // alert('터치되었습니다!');
                }}
                />
        </header>
    );
};

export default Header;