import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import RssFeed from './news/news';
import Peak from './peak';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#1e1e1e",
          padding: "1rem",
          display: "flex",
          gap: "1.5rem",
          zIndex: 1000,
          borderBottom: "1px solid #333"
        }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/news" style={{ color: "white", textDecoration: "none" }}>News</Link>
          <Link to="/peak" style={{ color: "white", textDecoration: "none" }}>Peak</Link>
        </header>

        <main style={{ padding: "5rem 1rem 1rem" }}>
          <Routes>
            <Route path="/" element={
              <h1>Home Page</h1>
            } />
            <Route path="/news" element={<RssFeed />} />
            <Route path="/peak" element={<Peak />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
