import './App.css'
import Dashboard from './dashboard/Dashboard';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import RssFeed from './news/News.tsx';
import Peak from './peak';
import Menu from './menu/Menu.tsx';
import {Context} from './Context.tsx';

import Courses from './courses/Courses.tsx';
import { useEffect, useState } from 'react';


function App() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth < 600);
  }, []);
  // const contextValues = {mobile: useMediaQuery('(max-width: 600px)')};
  return (
    <Context.Provider value={{mobile: mobile}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/news' element={<RssFeed />} />
          <Route path='/peak' element={<Peak />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;