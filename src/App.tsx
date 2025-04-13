import './App.css'
import Dashboard from './dashboard/Dashboard';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import RssFeed from './news/News.tsx';
import Peak from './peak';
import MenuPage from './menu/MenuPage.tsx';
import {Context} from './Context.tsx';

import Courses from './courses/Courses.tsx';
import { useEffect, useState } from 'react';

import AIComponent from './AI/AI.tsx';


function App() {
  const [mobile, setMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [desktopMenuHeight, setDesktopMenuHeight] = useState(0);
  useEffect(() => {
    setMobile(window.innerWidth < 600);
  }, []);
  // const contextValues = {mobile: useMediaQuery('(max-width: 600px)')};
  return (
    <Context.Provider value={{mobile: mobile, drawer: drawerOpen, drawerFunction: setDrawerOpen,
      desktopMenuHeight: desktopMenuHeight, setDesktopMenuHeight: setDesktopMenuHeight
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/news' element={<RssFeed />} />
          <Route path='/peak' element={<Peak />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/insights' element={<AIComponent />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;