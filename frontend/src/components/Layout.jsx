import React from 'react';
import { Link, Outlet }  from 'react-router-dom'
import Footer from './Footer'
import './Layout.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeDetail, changeItem, changePageTt } from '../store/modules/itemSlice';

const Layout = () => {


    
    return (
        <div id='wrap'>
                <main className="main">
                    <Outlet/>
                </main>
            <Footer/>
            
        </div>
    );
};

export default Layout;