import React, { useEffect, useState, useRef } from 'react';
import './reveal.css';

const RevealSection = () => {
    const containerRef = useRef(null);
    const [translateY, setTranslateY] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress: 0 when top enters, 1 when bottom exits
            const scrollVisible = windowHeight - rect.top;
            const totalRange = rect.height;
            const progress = Math.max(0, Math.min(1, scrollVisible / totalRange));

            // Map progress to the Y translation (100% down to 0%)
            const newY = 100 - (progress * 100);
            setTranslateY(newY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="reveal-container">
            <div className="sticky-viewport">
                <div
                    className="reveal-layer"
                    style={{
                        transform: `translateY(${translateY}%)`,
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&q=80&w=2000"
                        alt="Cinematic Reveal"
                        className="reveal-img"
                    />
                    <div className="reveal-overlay">
                        <div className="reveal-text-content">
                            <h2 className="reveal-title">Beyond The Grid</h2>
                            <p className="reveal-subtitle">Defining A New Legacy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
        <div className="app-container">
            {/* Intro Hero Section */}
            <div className="intro-hero">
                <h1 className="hero-title">NAVNEET<br />CHRONICLES</h1>
                <div className="hero-scroll"></div>
            </div>

            {/* Wipe Reveal Section */}
            <RevealSection />
        </div>
    );
} 