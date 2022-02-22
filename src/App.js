import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import logo from './logo.svg';

import './App.css';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/About'} element={<About/>}></Route>
          <Route path={'/Contact'} element={<Contact/>}></Route>
          <Route path={'/Portfolio'} element={<Portfolio/>}></Route>
          <Route path={'/'} element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
