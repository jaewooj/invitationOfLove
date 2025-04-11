import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Admin from './Admin';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import "./assets/css/common.css"
import "./assets/css/reset.css"
import Product from './pages/Product';
import Company from './pages/Company';
import Reference from './pages/Reference';
import Contact from './pages/Contact';
import Exterior from './product/Exterior';
import Interior from './product/Interior';
import Greeting from './company/Greeting';
import Vision from './company/Vision';
import History from './company/History';
import Map from './company/Map';
import RefExterior from './reference/RefExterior';
import RefInterior from './reference/RefInterior';
import Qna from './contact/Qna';
import Event from './contact/Event';
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin/>}/>
        {/* 여기서 로그인 된 경우 관리자 화면으로 이동해야함 */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>

          <Route path="product" element={<Product />}>
            <Route path="exterior" element={<Exterior />} />
            <Route path="interior" element={<Interior />} />
          </Route>

          <Route path="company" element={<Company />}>
            <Route path="greeting" element={<Greeting />} />
            <Route path="vision" element={<Vision />} />
            <Route path="history" element={<History />} />
            <Route path="map" element={<Map />} />
          </Route>

          <Route path="reference" element={<Reference />}>
            <Route path="refExterior" element={<RefExterior />} />
            <Route path="refInterior" element={<RefInterior />} />
          </Route>

          <Route path="contact" element={<Contact />}>
            <Route path="event" element={<Event />} />
            <Route path="qna" element={<Qna />} />
          </Route>
        </Route>
          {/* <Route path="/product" element={<Product/>}>
            <Route path="/product/exterior" element={<Exterior/>}
          </Route>
          <Route path="/company" element={<Company/>}/>
          <Route path="/reference" element={<Reference/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route> */}

      </Routes>
    </Router>
  )
}

export default App
