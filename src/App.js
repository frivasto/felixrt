import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import './App.scss'
import ScrollToTop from './components/util/ScrollToTop'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import ThisBrand from './components/projects/ThisBrand'
import Kerubines from './components/projects/Kerubines'

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path={'/About'} element={<About/>}></Route>
            <Route path={'/Contact'} element={<Contact/>}></Route>
            <Route path={'/Portfolio'} element={<Portfolio/>}></Route>
            <Route path={'/Portfolio/ThisBrand'} element={<ThisBrand/>}></Route>
            <Route path={'/Portfolio/Kerubines'} element={<Kerubines/>}></Route>
            <Route path={'/'} element={<Home/>}></Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
