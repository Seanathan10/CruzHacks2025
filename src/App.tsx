import './App.css'
import '@mantine/core/styles.css';
import Dashboard from './dashboard/Dashboard';
import { MantineProvider } from '@mantine/core';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import RssFeed from './news/news.tsx';
import Peak from './peak';
import {Context} from './Context.tsx';
import { useMediaQuery } from '@mantine/hooks';

import Courses from './courses/Courses.tsx';


function App() {
  const contextValues = {mobile: useMediaQuery('(max-width: 600px)')};
  return (
    <Context.Provider value={contextValues}>
      <MantineProvider >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/news' element={<RssFeed />} />
            <Route path='/peak' element={<Peak />} />
            <Route path='/courses' element={<Courses />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </Context.Provider>
  );
}

export default App;
