import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Company.css'
import './CompanyM.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changePageTt } from '../store/modules/itemSlice';

const Company = () => {
    const pageTitle = useSelector(state=>state.item.pageTitle);
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
    const pageText = 
    pageTitle === 'greeting' ? 'CEO 인사말' :
    pageTitle === 'vision' ? '비전/목표' :
    pageTitle === 'history' ? '연혁' :
    pageTitle === 'map' ? '오시는길' : '';
    const location = useLocation();

    useEffect(() => {
        // URL 경로에 따라 초기 pageTitle 설정
        if (location.pathname.includes('/company/greeting')) {
            dispatch(changePageTt('greeting'));
        } else if (location.pathname.includes('/company/vision')) {
            dispatch(changePageTt('vision'));
        } else if (location.pathname.includes('/company/history')) {
            dispatch(changePageTt('history'));
        } else if (location.pathname.includes('/company/map')) {
            dispatch(changePageTt('map'));
        }
        
        dispatch(changeColor('product'));
    }, [location.pathname, dispatch]);


    return (
        <div className="company">
        <div className="companyTt">
            <div className="inner">
                <div className="companyName">
                    <h2>COMPANY</h2>
                </div>
                <div className="site">
                    <p>HOME</p>
                    <p>&gt;</p>
                    <p>COMPANY</p>
                    <p>&gt;</p>
                    <p>{pageText}</p>
                </div>
            </div>
        </div>
        <div className='inner'>
            <div className="companyNav">
                <ul>
                    <li className={`${pageTitle==='greeting'?'on':''}`}><Link to="/company/greeting" onClick={()=>dispatch(changePageTt('greeting'))}>CEO 인사말</Link></li>
                    {/* <li className={`${pageTitle==='vision'?'on':''}`}><Link to="/company/vision" onClick={()=>dispatch(changePageTt('vision'))}>비전/목표</Link></li> */}
                    <li className={`${pageTitle==='history'?'on':''}`}><Link to="/company/history" onClick={()=>dispatch(changePageTt('history'))}>연혁</Link></li>
                    <li className={`${pageTitle==='map'?'on':''}`}><Link to="/company/map" onClick={()=>dispatch(changePageTt('map'))}>오시는길</Link></li>
                </ul>
            </div>
            <Outlet/>
        </div>

            
        </div>
    );
};

export default Company;