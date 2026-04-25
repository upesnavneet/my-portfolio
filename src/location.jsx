import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from './components/ui/SplitText/SplitText';

/**
 * REFINED ORIGINS COMPONENT
 * Features: High-impact typography, grid layout.
 * Colors: #ED3500 (Background) | #F4FFFD (Text) | #5EE43A (Accent)
 * Focus: Highlighting Patna roots and Dehradun education.
 */

export default function App() {
    return (
        <div className="portfolio-root">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --color-bg-dark: #12161D;
          --color-accent-green: #FDB04D;
          --color-text-mint: #FDB04D;
        }

        body, html {
          margin: 0;
          padding: 0;
          background-color: var(--color-bg-dark);
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        .origins-section {
          position: relative;
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 40px; /* Use vh for dynamic padding */
          color: var(--color-text-mint);
          box-sizing: border-box;
          background-color: var(--color-bg-dark);
          overflow: hidden;
        }

        .origins-content {
          position: relative;
          z-index: 10;
          max-width: 1500px; /* Increased to push right container further right */
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center; /* Center to avoid pushing out of bounds */
          height: 100%;
          gap: 3vh; /* Dynamic gap */
        }

        .narrative-block {
          align-self: flex-start;
          max-width: 800px;
          width: 100%;
          margin-left: 8vw; /* Shifted more towards the right */
        }

        .location-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 500; /* Reduced weight */
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: clamp(0.6rem, 1.5vh, 0.75rem);
          margin-bottom: 2vh;
          color: var(--color-accent-green);
          background: rgba(94, 228, 58, 0.1);
          padding: 6px 16px;
          border-radius: 50px;
          border: 1px solid rgba(94, 228, 58, 0.15);
        }

        .big-heading {
          font-size: clamp(1.8rem, 5vh, 3.5rem); /* Reduced significantly */
          font-weight: 700; /* Reduced weight from 900 to 700 */
          font-style: italic; /* Added italic */
          line-height: 0.95;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          margin: 0 0 1.5vh 0;
          text-shadow: 2px 4px 10px rgba(0,0,0,0.5);
        }

        .bio-text {
          font-size: clamp(0.85rem, 2vh, 1rem);
          line-height: 1.5;
          opacity: 0.9;
          font-weight: 400;
          max-width: 500px;
          letter-spacing: 0.01em;
          margin: 0;
        }

        .edu-grid {
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
          max-width: 350px;
          margin-top: 2vh;
        }

        .edu-item {
          border-left: 2px solid rgba(244, 255, 253, 0.1);
          padding-left: 20px;
          padding-bottom: 15px; /* Reduced for vertical fit */
          position: relative;
          transition: all 0.3s ease;
        }
        
        .edu-item:last-child {
          padding-bottom: 0;
          border-left-color: transparent;
        }

        .edu-item::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 4px;
          width: 8px;
          height: 8px;
          background-color: var(--color-bg-dark);
          border: 2px solid rgba(244, 255, 253, 0.2);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .edu-item:hover::before {
          border-color: var(--color-accent-green);
          background-color: var(--color-accent-green);
          box-shadow: 0 0 10px rgba(94, 228, 58, 0.4);
        }

        .edu-item h4 {
          font-size: clamp(0.8rem, 2vh, 0.95rem);
          font-weight: 700;
          text-transform: lowercase;
          margin: 0 0 2px 0;
          letter-spacing: 0.02em;
          color: var(--color-text-mint);
        }

        .edu-item p {
          opacity: 0.65;
          font-size: clamp(0.55rem, 1.2vh, 0.65rem);
          margin: 0;
          text-transform: lowercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        .edu-icon-wrapper {
          position: relative;
          left: -20px;
          margin-bottom: 1.5vh;
          color: var(--color-accent-green);
          background: rgba(94, 228, 58, 0.1);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid rgba(94, 228, 58, 0.2);
        }

        @media (max-width: 1024px) {
          .origins-section {
            padding: 40px 30px;
            height: auto;
            min-height: 100vh;
            overflow: visible;
          }
          .origins-content { 
            justify-content: flex-start;
            height: auto;
            gap: 30px;
          }
          .narrative-block {
            margin-bottom: 40px;
            margin-left: 0; /* Reset for mobile */
          }
          .edu-grid {
            align-self: flex-start;
          }
        }
      `}} />

            <section className="origins-section">
                <motion.div
                    className="origins-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Main Content Area */}
                    <div className="narrative-block">
                        <SplitText
                            text="From Dehradun... That's what it is like studying in UPES Dehradun."
                            className="big-heading"
                            delay={25}
                            duration={1.2}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-50px"
                            textAlign="left"
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    );
}