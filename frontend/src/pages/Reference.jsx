import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Reference.css'
import './ReferenceM.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changePageTt } from '../store/modules/itemSlice';

const Reference = () => {
    
    const pageTitle = useSelector(state=>state.item.pageTitle);
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
    const pageText = 
    pageTitle === 'refExterior' ? '외부 간판' :
    pageTitle === 'refInterior' ? '내부 디자인' : '';
    const location = useLocation();

    useEffect(() => {
        // URL 경로에 따라 초기 pageTitle 설정
        if (location.pathname.includes('/reference/refExterior')) {
            dispatch(changePageTt('refExterior'));
        } else if (location.pathname.includes('/reference/refInterior')) {
            dispatch(changePageTt('refInterior'));
        }
        
        dispatch(changeColor('product'));
    }, [location.pathname, dispatch]);


    return (
        <div className="reference">
        <div className="referenceTt">
            <div className="inner">
                <div className="referenceName">
                    <h2>REFERENCE</h2>
                </div>
                <div className="site">
                    <p>HOME</p>
                    <p>&gt;</p>
                    <p>REFERENCE</p>
                    <p>&gt;</p>
                    <p>{pageText}</p>
                </div>
            </div>
        </div>
        <div className='inner'>
            <div className="referenceNav">
                <ul>
                    <li className={`${pageTitle==='refExterior'?'on':''}`}><Link to="/reference/refExterior" onClick={()=>dispatch(changePageTt('refExterior'))}>외부 간판</Link></li>
                    <li className={`${pageTitle==='refInterior'?'on':''}`}><Link to="/reference/refInterior" onClick={()=>dispatch(changePageTt('refInterior'))}>내부 디자인</Link></li>
                </ul>
            </div>
            <Outlet/>
        </div>

            
        </div>
    );
};

export default Reference;