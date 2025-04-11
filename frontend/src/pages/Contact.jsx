import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Contact.css'
import './ContactM.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changePageTt } from '../store/modules/itemSlice';

const Contact = () => {
    const pageTitle = useSelector(state=>state.item.pageTitle);
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
    const pageText = 
    pageTitle === 'event' ? '이벤트' :
    pageTitle === 'qna' ? '서비스 문의' : '';
    const location = useLocation();

    useEffect(() => {
        // URL 경로에 따라 초기 pageTitle 설정
        if (location.pathname.includes('/contact/event')) {
            dispatch(changePageTt('event'));
        } else if (location.pathname.includes('/contact/qna')) {
            dispatch(changePageTt('qna'));
        }
        
        dispatch(changeColor('product'));
    }, [location.pathname, dispatch]);

    return (
        <div className="contact">
        <div className="contactTt">
            <div className="inner">
                <div className="contactName">
                    <h2>CONTACT</h2>
                </div>
                <div className="site">
                    <p>HOME</p>
                    <p>&gt;</p>
                    <p>CONTACT</p>
                    <p>&gt;</p>
                    <p>{pageText}</p>
                </div>
            </div>
        </div>
        <div className='inner'>
            <Outlet/>
        </div>

            
        </div>
    );
};

export default Contact;