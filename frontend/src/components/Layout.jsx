import React from 'react';
import { Link, Outlet }  from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import './Layout.css';
import './LayoutM.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeDetail, changeItem, changePageTt } from '../store/modules/itemSlice';

const Layout = () => {
    const selectedOption = useSelector(state => state.item.selectedOption); // Redux 스토어의 selectedOption 값을 가져옵니다.
    const detailOption = useSelector(state => state.item.detailOption); // Redux 스토어의 selectedOption 값을 가져옵니다.
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.

    const handleMouseEnter = (option) => {
        dispatch(changeItem(option));// 해당 옵션으로 상태 변경
    };
    const handleMouseLeave = () => {
        dispatch(changeItem('')); // 상태 초기화
    };
    const handleMouseEnterDetail = (option) => {
        dispatch(changeDetail(option));// 해당 옵션으로 상태 변경
    };
    const handleMouseLeaveDetail = () => {
        dispatch(changeDetail('')); // 상태 초기화
    };
    const onClickColor = (option) => {
        dispatch(changeColor(option));// 해당 옵션으로 상태 변경
    };
    const onClickPageTt = (option) => {
        dispatch(changePageTt(option));// 해당 옵션으로 상태 변경
    };

    
    return (
        <div id='wrap' className={`${selectedOption ? 'on' : ''}`}>
            <div className={`menuBg ${selectedOption ? 'on' : ''}`}></div>
            <Header/>
                <div className={`menuDiv ${selectedOption ? 'on' : ''}`} >
                    <ul className="menuList" 
                    onMouseEnter={()=>handleMouseEnter('on')}
                    onMouseLeave={handleMouseLeave}
                    >
                        <li className={`liPro ${selectedOption==='product'?'hovered':''}`}>
                            <ul
                                onMouseEnter={()=>handleMouseEnter('product')}
                                onMouseLeave={handleMouseLeaveDetail}
                                onClick={()=>onClickColor('product')}
                            >
                                <li className={`${detailOption==='productEx' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('productEx')}
                                ><Link to="/product/exterior" onClick={()=>{handleMouseLeave();onClickPageTt('exterior');}}>
                                    외부 간판</Link></li>
                                <li className={`${detailOption==='productIn' ? 'hovered' : ''}`}
                                onMouseEnter={()=>handleMouseEnterDetail('productIn')}
                                ><Link to="/product/interior" onClick={()=>{handleMouseLeave();onClickPageTt('interior');}}>
                                    실내 디자인</Link></li>
                            </ul>
                        </li>
                        <li className={`liCom ${selectedOption==='company'?'hovered':''}`}>
                            <ul
                                onMouseEnter={()=>handleMouseEnter('company')}
                                onMouseLeave={handleMouseLeaveDetail}
                                onClick={()=>onClickColor('company')}
                            >
                                <li className={`${detailOption==='companyCeo' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('companyCeo')}
                                ><Link to="/company/greeting" onClick={()=>{handleMouseLeave();onClickPageTt('greeting');}}>
                                    CEO 인사말</Link></li>
                                {/* <li className={`${detailOption==='companyVison' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('companyVison')}
                                ><Link to="/company/vision" onClick={()=>{handleMouseLeave();onClickPageTt('vision');}}>
                                    비전/목표</Link></li> */}
                                <li className={`${detailOption==='companyHis' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('companyHis')}
                                ><Link to="/company/history" onClick={()=>{handleMouseLeave();onClickPageTt('history');}}>
                                    연혁</Link></li>
                                <li className={`${detailOption==='companyMap' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('companyMap')}
                                ><Link to="/company/map" onClick={()=>{handleMouseLeave();onClickPageTt('map');}}>
                                    오시는길</Link></li>
                            </ul>
                        </li>
                        <li className={`liRef ${selectedOption==='reference'?'hovered':''}`}>
                            <ul
                                onMouseEnter={()=>handleMouseEnter('reference')}
                                onMouseLeave={handleMouseLeaveDetail}
                                onClick={()=>onClickColor('reference')}
                            >
                                <li className={`${detailOption==='referenceEx' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('referenceEx')}
                                ><Link to="/reference/refExterior" onClick={()=>{handleMouseLeave();onClickPageTt('refExterior');}}>
                                    외부 간판</Link></li>
                                <li className={`${detailOption==='referenceIn' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('referenceIn')}
                                ><Link to="/reference/refInterior" onClick={()=>{handleMouseLeave();onClickPageTt('refInterior');}}>
                                    실내 디자인</Link></li>
                            </ul>
                        </li>
                        <li className={`liCon ${selectedOption==='contact'?'hovered':''}`}>
                            <ul
                                onMouseEnter={()=>handleMouseEnter('contact')}
                                onMouseLeave={handleMouseLeaveDetail}
                                onClick={()=>onClickColor('contact')}
                            >
                                {/* <li className={`${detailOption==='contactEvent' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('contactEvent')}
                                ><Link to="/contact/event" onClick={()=>{handleMouseLeave();onClickPageTt('event');}}>
                                    이벤트</Link></li> */}
                                <li className={`${detailOption==='contactQna' ? 'hovered' : ''}`} 
                                onMouseEnter={()=>handleMouseEnterDetail('contactQna')}
                                ><Link to="/contact/Qna" onClick={()=>{handleMouseLeave();onClickPageTt('qna');}}>
                                    서비스 문의</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <main className="main">
                    <Outlet/>
                </main>
            <Footer/>
            
        </div>
    );
};

export default Layout;