import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import Dashboard from './dashboard/Dashboard';
import { MantineProvider } from '@mantine/core';

let mobile = false;
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RssFeed from './news/news';
import Peak from './peak';


function App() {
  return (
  <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/news' element={<RssFeed />} />
        <Route path='/peak' element={<Peak />} />
      </Routes>
    </BrowserRouter>
  </MantineProvider>
  );
}

export default App;
