import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import Dashboard from './dashboard/Dashboard';
import { MantineProvider } from '@mantine/core';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import RssFeed from './news/News.tsx';
import Peak from './peak';
import {Context} from './Context.tsx';
import { useMediaQuery } from '@mantine/hooks';
import Menu from './menu/Menu.tsx';


function App() {
  const contextValues = {mobile: useMediaQuery('(max-width: 600px)')};
  return (
    <Context.Provider value={contextValues}>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/news' element={<RssFeed />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/peak' element={<Peak />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </Context.Provider>
  );
}

export default App;
