import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from './components/ui/SplitText/SplitText';

/**
 * REFINED ORIGINS COMPONENT
 * Features: High-impact typography, grid layout.
 * Colors: Black and White styling
 * Focus: Highlighting Patna roots and Dehradun education.
 */

export default function App() {
  return (
    <div className="portfolio-root">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --color-bg-dark: #0a0a0a;
          --color-accent: #ffffff;
          --color-text-main: #ffffff;
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
          padding: 15vh 12vw;
          color: var(--color-text-main);
          box-sizing: border-box;
          background-color: var(--color-bg-dark);
          background-image: 
            radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.04) 0%, transparent 50%);
          overflow: hidden;
        }

        .origins-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          gap: 3vh;
        }

        .narrative-block {
          align-self: flex-start;
          max-width: 800px;
          width: 100%;
          margin-left: 0;
        }

        .college-block {
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .college-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px 30px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8);
          cursor: default;
        }

        .college-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px -10px rgba(255, 255, 255, 0.1);
        }

        .college-icon {
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFF;
          width: 55px;
          height: 55px;
          border-radius: 14px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .college-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        .college-name {
          font-size: clamp(1rem, 2.5vh, 1.3rem);
          font-weight: 700;
          color: #FFF;
          margin: 0 0 4px 0;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .college-major {
          font-size: clamp(0.8rem, 1.8vh, 1rem);
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 4px 0;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .college-year {
          font-size: clamp(0.75rem, 1.5vh, 0.9rem);
          color: #FFF;
          margin: 0;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .location-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600; 
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: clamp(0.7rem, 1.5vh, 0.85rem);
          margin-bottom: 3vh;
          color: #000;
          background: #FFF;
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .big-heading {
          font-size: clamp(1.8rem, 5vh, 3.5rem);
          font-weight: 700;
          font-style: italic;
          line-height: 0.95;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          margin: 0 0 1.5vh 0;
          text-shadow: 2px 4px 10px rgba(0,0,0,0.8);
          color: #FFF;
        }

        .bio-text {
          font-size: clamp(0.85rem, 2vh, 1rem);
          line-height: 1.5;
          opacity: 0.7;
          font-weight: 400;
          max-width: 500px;
          letter-spacing: 0.01em;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .origins-section {
            padding: 40px 30px;
            height: auto;
            min-height: 100vh;
            overflow: visible;
          }
          .origins-content { 
            justify-content: space-between;
            height: auto;
            min-height: calc(100vh - 80px);
            gap: 50px;
          }
          .narrative-block {
            margin-bottom: 20px;
            margin-left: 0;
          }
          .college-block {
            align-self: flex-start;
          }
          .college-card {
            width: 100%;
            justify-content: flex-start;
          }
          .college-info {
            align-items: flex-start;
            text-align: left;
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
            <motion.div
              className="location-tag"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MapPin size={16} /> Dehradun, India
            </motion.div>
            <SplitText
              text="Based in Dehradun, crafting solutions that scale beyond it."
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

          {/* Bottom Right College Info */}
          <motion.div
            className="college-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="college-card">
              <div className="college-icon">
                <GraduationCap size={28} />
              </div>
              <div className="college-info">
                <h3 className="college-name">UPES Dehradun</h3>
                <p className="college-major">Data Science</p>
                <p className="college-year">Class of 2024 &mdash; 2028</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}