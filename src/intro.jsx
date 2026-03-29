import React from 'react';

/**
 * SIMPLIFIED PORTFOLIO HERO
 * Focus: High-impact typography on electric blue background.
 * Optimized for zero horizontal overflow and perfect centering.
 */

const HeroContent = () => (
    <main className="intro-main">
        <h1 className="hero-title">
            <span className="hero-accent-amber">Optimizing</span>
            <br className="md:hidden" /> Models,
            <br />
            Deploying The <span className="hero-accent-red">Code,</span>
            <br />
            Scaling It All In
            <br />
            All Stacks. Defining A
            <br />
            <span className="hero-accent-amber">Logic</span> In Data
            <br />
            On And Off The
            <br />
            Server.
        </h1>
    </main>
);

export default function App() {
    return (
        <div className="intro-wrapper">
            {/* CSS STYLES */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Playfair+Display:italic,wght@700&display=swap');
        
        .intro-wrapper {
          height: 100vh;
          width: 100%;
          background-color: #ffffffff;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .intro-main {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          padding: 0 1rem;
          text-align: center;
          overflow: hidden;
          box-sizing: border-box;
        }

        .hero-title {
          font-size: 8.5vw;
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.05em;
          color: black;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
          width: 100%;
          max-width: 95vw;
          margin: 0 auto;
          display: block;
          text-align: center;
        }

        @media (min-width: 768px) { 
          .hero-title { 
            font-size: 5.5vw; 
            line-height: 0.85;
          } 
        }
        
        @media (min-width: 1024px) { 
          .hero-title { 
            font-size: 5vw; 
          } 
        }

        .hero-accent-amber {
          color: #093FB4;
          font-style: italic;
          font-family: 'Poppins', serif;
          text-transform: none;
          letter-spacing: normal;
        }

        .hero-accent-red {
          color: #f03c02;
          font-style: italic;
          font-family: 'Playfair Display', serif;
          text-transform: none;
          letter-spacing: normal;
        }

        /* Subtle background depth */
        .bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
      `}} />

            <div className="bg-glow"></div>
            <HeroContent />
        </div>
    );
}