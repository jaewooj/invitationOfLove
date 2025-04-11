import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Product.css';
import './ProductM.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changePageTt } from '../store/modules/itemSlice';

const Product = () => {
    const pageTitle = useSelector(state=>state.item.pageTitle);
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
    const pageText = 
    pageTitle === 'exterior' ? '외부 간판' :
    pageTitle === 'interior' ? '내부 디자인' : '';
    const location = useLocation();

    useEffect(() => {
        // URL 경로에 따라 초기 pageTitle 설정
        if (location.pathname.includes('/product/exterior')) {
            dispatch(changePageTt('exterior'));
        } else if (location.pathname.includes('/product/interior')) {
            dispatch(changePageTt('interior'));
        }
        
        dispatch(changeColor('product'));
    }, [location.pathname, dispatch]);


    return (
        <div className="product">
            <div className="productTt">
                <div className="inner">
                    <div className="productName">
                        <h2>PRODUCT</h2>
                    </div>
                    <div className="site">
                        <p>HOME</p>
                        <p>&gt;</p>
                        <p>PRODUCT</p>
                        <p>&gt;</p>
                        <p>{pageText}</p>
                    </div>
                </div>
            </div>
            <div className='inner ctInner'>
                <div className="productNav">
                    <ul>
                        <li className={`${pageTitle==='exterior'?'on':''}`}><Link to="/product/exterior" onClick={()=>dispatch(changePageTt('exterior'))}>외부 간판</Link></li>
                        <li className={`${pageTitle==='interior'?'on':''}`}><Link to="/product/interior" onClick={()=>dispatch(changePageTt('interior'))}>내부 디자인</Link></li>
                    </ul>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Product;