import { useState } from 'react';
import './App.css';

import RssFeed from './news/news';
import Peak from './peak';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/peak">Peak</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src="/react.svg" className="logo react" alt="React logo" />
            </a>
          </div>
        } />
        <Route path="/news" element={<RssFeed />} />
        <Route path="/peak" element={<Peak />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
