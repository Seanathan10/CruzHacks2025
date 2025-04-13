import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mantine/hooks';

import { TopBar as MobileTopBar } from "../dashboard/mobile/TopBar.tsx";
import { TopBar as DesktopTopBar } from "../dashboard/desktop/TopBar.tsx";

// import './AI.css';
import './FuturisticAI.css';

const AIComponent: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    
    const mediaQueryMobile = useMediaQuery("(max-width: 600px)");

    useEffect(() => {
        const interBubble = document.querySelector('.interactive') as HTMLDivElement;
        let curX = 0, curY = 0, tgX = 0, tgY = 0;
      
        const move = () => {
          curX += (tgX - curX) / 20;
          curY += (tgY - curY) / 20;
          if (interBubble) {
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
          }
          requestAnimationFrame(move);
        };
      
        const handleMouse = (e: MouseEvent) => {
          tgX = e.clientX;
          tgY = e.clientY;
        };
      
        window.addEventListener('mousemove', handleMouse);
        move();
      
        return () => window.removeEventListener('mousemove', handleMouse);
      }, []);
      

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/generate_content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();
            setResponse(data.text || 'No response');
        } catch (error) {
            console.error('Error generating content:', error);
            setResponse('Error generating content. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        {mediaQueryMobile ? <MobileTopBar /> : <DesktopTopBar />}
    
        <div className="gradient-bg">
          <svg>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix"
                values="1 0 0 0 0  
                        0 1 0 0 0  
                        0 0 1 0 0  
                        0 0 0 20 -10" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </svg>
    
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>
    
        <div className="AIPage" style={{ position: "relative", zIndex: 10 }}>
        <h1>AI Content Generator</h1>
                <textarea
                    className="AIInput"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt here..."
                />
                <button
                    className="AIButton"
                    onClick={handleGenerate}
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Send'}
                </button>
                <div className="AIOutput">
                    <h3>Model Output:</h3>
                    <p>{response || 'No output yet.'}</p>
                </div>
        </div>
        </>
    );
};

export default AIComponent;
