import React, { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { TopBar as MobileTopBar } from "../dashboard/mobile/TopBar.tsx";
import { TopBar as DesktopTopBar } from "../dashboard/desktop/TopBar.tsx";
import './FuturisticAI.css';
import './AI-InterestCard.css';

interface Message {
    role: 'user' | 'assistant';
    text: string;
}

const INITIAL_MESSAGE: Message = {
    role: 'assistant',
    text: 'Welcome to UCSC Insights. How can I help you today?'
};

const API_URL = "http://localhost:8000/generate_content";

const AIComponent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery("(max-width: 600px)");
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Handle interactive bubble animation
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

    // Scroll to bottom when messages change
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        
        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: input }),
            });

            if (!res.ok) throw new Error('Failed to fetch response');

            const data = await res.json();
            const assistantReply: Message = {
                role: 'assistant',
                text: data.text || "No insights found for that request.",
            };
            
            setMessages(prev => [...prev, assistantReply]);
        } catch (error) {
            console.error('Error fetching response:', error);
            setMessages(prev => [
                ...prev, 
                { role: 'assistant', text: 'Error retrieving insights. Please try again later.' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {isMobile ? <MobileTopBar /> : <DesktopTopBar />}

            {/* Gradient Background */}
            <div className="gradient-bg">
                <svg>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="goo" />
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

            {/* Dashboard Cards */}
            <div className='dashboard-scatter-container'>
                <div className="dashboard-scatter">
                    <div className="ucsc-card card-top-left">
                        <div className="ucsc-card-header">
                            <span className="ucsc-icon">📘</span>
                            <h3>Classes</h3>
                        </div>
                        <div className="ucsc-card-body">
                            <p><strong>Today:</strong> CSE 101 at 12:00 PM</p>
                            <p><strong>Tomorrow:</strong> STAT 131 @ 9:00 AM</p>
                            <hr />
                            <p>💡 Interest: AI Ethics, Operating Systems</p>
                        </div>
                    </div>

                    <div className="ucsc-card card-center">
                        <div className="ucsc-card-header">
                            <span className="ucsc-icon">🍽️</span>
                            <h3>Menu</h3>
                        </div>
                        <div className="ucsc-card-body">
                            <p><strong>Cowell Lunch:</strong> Vegan Tofu Stir Fry</p>
                            <p><strong>College Nine Dinner:</strong> Spicy Thai Noodles 🌶️</p>
                            <hr />
                            <p>⭐ You favorited: Chocolate Cake 🍰</p>
                        </div>
                    </div>

                    <div className="ucsc-card card-bottom-right">
                        <div className="ucsc-card-header">
                            <span className="ucsc-icon">📰</span>
                            <h3>News</h3>
                        </div>
                        <div className="ucsc-card-body">
                            <p><strong>Engineering:</strong> New Robotics Lab Announced</p>
                            <p><strong>Biology:</strong> Study Shows Otters Help Kelp</p>
                            <hr />
                            <a href="/news">View All</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Interface */}
            <div className="AIPage" style={{ zIndex: 10 }}>
                <h1 className="insights-header">🔍 UCSC Insights Dashboard</h1>

                <div className="chat-container">
                    {messages.map((msg, i) => (
                        <div key={i} className={`chat-bubble ${msg.role}`}>
                            <p>{msg.text}</p>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>

                <div className="chat-input-bar">
                    <input
                        type="text"
                        placeholder="Ask about dining, courses, or latest research..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={loading}
                    />
                    <button 
                        onClick={handleSend} 
                        disabled={loading || !input.trim()}
                    >
                        {loading ? '...' : 'Send'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default AIComponent;
