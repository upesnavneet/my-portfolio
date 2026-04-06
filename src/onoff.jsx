import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import ScrollReveal from './components/ui/ScrollReveal/ScrollReveal';

import onserver from '../src/assets/me/onserver1.jpeg'
import offserver from '../src/assets/me/offserver.jpg'

import onscrollimage from '../src/assets/me/onscroll.png'


const TopographicLines = () => (
  <div className="oo-topographic-container">
    <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <path d="M-100,200 Q150,50 400,300 T900,100 T1400,400" fill="none" stroke="#000000" strokeWidth="1" />
      <path d="M-50,250 Q200,100 450,350 T950,150 T1450,450" fill="none" stroke="#000000" strokeWidth="1" />
      <path d="M0,300 Q250,150 500,400 T1000,200 T1500,500" fill="none" stroke="#000000" strokeWidth="1" />
      <path d="M50,350 Q300,200 550,450 T1050,250 T1550,550" fill="none" stroke="#000000" strokeWidth="1" />
    </svg>
  </div>
);

const TrackCard = ({ title, subtitle, description, inView, delay, invertedArrow }) => {
  return (
    <div
      className={`oo-track-card ${inView ? 'oo-card-in' : 'oo-card-out'}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      <div className="oo-card-header">
        <span className="oo-subtitle-accent">{subtitle}</span>
        <h2 className="oo-title-text">{title}</h2>
      </div>
      <h3 className="oo-track-label">server</h3>
      <p className="oo-description-text">{description}</p>
      <button className="oo-track-button">
        {invertedArrow ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
      </button>
    </div>
  );
};

export default function App() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const stackSectionRef = useRef(null);
  const stackImageRef = useRef(null);
  const pinWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else if (entry.boundingClientRect.top > 0) {
          setInView(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (stackSectionRef.current && pinWrapperRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          stackSectionRef.current,
          { y: "100%" },
          {
            y: "0%",
            ease: "none",
            scrollTrigger: {
              trigger: pinWrapperRef.current,
              start: "top top",
              end: "+=150%",
              pin: true,
              scrub: true,
            }
          }
        );
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="oo-main-wrapper">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&family=Playfair+Display:italic,wght@700&display=swap');

        :root {
          --oo-color-bg-red: #E8DBB3;
          --oo-color-accent-green: #FFFFFF;
          --oo-color-text-mint: #000000;
          --oo-color-neutral-dark: #333333;
        }

        .oo-main-wrapper {
          background-color: var(--oo-color-neutral-dark);
          font-family: 'Poppins', sans-serif;
        }

        /* --- Intro Section --- */
        .oo-intro-section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #E8DBB3;
          text-align: center;
          padding: 2.5rem;
        }

        .oo-intro-title {
          color: var(--oo-color-neutral-dark);
          font-weight: 900;
          font-size: 3rem;
          text-transform: uppercase;
          letter-spacing: -0.05em;
          margin-bottom: 1rem;
        }

        .oo-intro-subtitle {
          color: rgba(51, 51, 51, 0.6);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          margin-bottom: 3rem;
        }

        .oo-scroll-indicator {
          width: 1px;
          height: 8rem;
          background-color: var(--oo-color-text-mint);
          border-radius: 999px;
          animation: oo-bounce 2s infinite;
        }

        @keyframes oo-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }

        /* --- Track Section --- */
        .oo-track-section {
          position: relative;
          z-index: 10;
          height: 100vh;
          width: 100%;
          background-color: var(--oo-color-bg-red);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-sizing: border-box;
        }

        .oo-topographic-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          opacity: 0.2;
        }

        .oo-content-container {
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 5rem;
          position: relative;
          z-index: 20;
          padding: 0 5vw;
        }

        @media (min-width: 768px) {
          .oo-content-container {
            flex-direction: row;
            gap: 4rem;
            justify-content: center;
          }
        }

        /* --- Sliding Images --- */
        .oo-sliding-image {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: none;
          transition: all 1200ms cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 20;
        }

        @media (min-width: 768px) {
          .oo-sliding-image { display: block; }
        }

        .oo-image-left {
          left: 5vw;
          width: 400px;
        }

        @media (min-width: 1024px) { 
          .oo-image-left { width: 500px; height: 100vh; left: 0; } 
        }

        .oo-image-right {
          right: 5vw;
          width: 360px;
        }

        @media (min-width: 1024px) { 
          .oo-image-right { width: 460px; height: 100vh; right: 0; } 
        }

        .oo-img-asset {
          width: 100%;
          height: auto;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.7s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        @media (min-width: 1024px) {
          .oo-img-asset { height: 100vh; }
        }

        .oo-sliding-image:hover .oo-img-asset { filter: grayscale(0%); }

        .oo-image-left .oo-img-asset {
          mask-image: linear-gradient(to right, black 70%, transparent 100%);
        }

        .oo-image-right .oo-img-asset {
          mask-image: linear-gradient(to left, black 70%, transparent 100%);
        }

        /* Animation States for Images */
        .oo-in-view-left { transform: translateY(-50%) translateX(0); opacity: 1; }
        .oo-out-view-left { transform: translateY(-50%) translateX(-100%) scale(0.95); opacity: 0; }
        .oo-in-view-left:hover { transform: translateY(-50%) translateX(-60px); }
        
        .oo-in-view-right { transform: translateY(-50%) translateX(0); opacity: 1; }
        .oo-out-view-right { transform: translateY(-50%) translateX(100%) scale(0.95); opacity: 0; }
        .oo-in-view-right:hover { transform: translateY(-50%) translateX(60px); }

        /* --- Track Cards --- */
        .oo-track-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 20rem;
          text-align: center;
          z-index: 30;
          transition: all 1000ms ease-out;
        }

        .oo-card-in { opacity: 1; transform: translateY(0); }
        .oo-card-out { opacity: 0; transform: translateY(20px); }

        .oo-card-header { position: relative; margin-bottom: 1rem; }

        .oo-subtitle-accent {
          position: absolute;
          top: -2.5rem;
          left: -1.5rem;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 4.5rem;
          color: var(--oo-color-accent-green);
          opacity: 0.8;
          z-index: 0;
          pointer-events: none;
        }

        .oo-title-text {
          font-size: 4.5rem;
          font-weight: 900;
          letter-spacing: -0.05em;
          color: var(--oo-color-text-mint);
          position: relative;
          z-index: 10;
          line-height: 1;
          text-transform: uppercase;
          margin: 0;
        }

        .oo-track-label {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 2.25rem;
          color: var(--oo-color-text-mint);
          margin-top: -0.6rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-transform: lowercase;
        }

        .oo-description-text {
          color: #000000ff;
          font-size: 0.875rem;
          line-height: 1.625;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .oo-track-button {
          width: 3.5rem;
          height: 3.5rem;
          background-color: var(--oo-color-accent-green);
          border: none;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--oo-color-neutral-dark);
          cursor: pointer;
          transition: transform 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .oo-track-button:hover { transform: scale(1.1); }
        
        /* Mirroring logic for icon hover */
        .oo-track-button svg { transition: transform 0.3s ease; }
        .oo-track-card:nth-child(1) .oo-track-button:hover svg { transform: translateX(-4px); }
        .oo-track-card:nth-child(2) .oo-track-button:hover svg { transform: translateX(4px); }



        .oo-vertical-branding {
          position: absolute;
          left: 2.5rem;
          bottom: 2.5rem;
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          opacity: 0.3;
        }

        @media (min-width: 768px) { .oo-vertical-branding { display: flex; } }

        .oo-v-line { width: 1px; height: 8rem; background-color: var(--oo-color-text-mint); }
        .oo-v-text {
          color: var(--oo-color-text-mint);
          font-weight: 900;
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.5em;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        /* --- Pin Wrapper --- */
        .oo-pin-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        /* --- Stack Section --- */
        .oo-stack-section {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 20;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .oo-full-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}} />

      {/* SECTION 1: Intro */}
      <div className="oo-intro-section">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={15}
          blurStrength={7}
        >
          But am I all about Coffee and Coding?
        </ScrollReveal>
        <div className="oo-scroll-indicator"></div>
      </div>

      {/* SECTION 2: The Track */}
      <div ref={pinWrapperRef} className="oo-pin-wrapper">
        <section ref={sectionRef} className="oo-track-section">
          <TopographicLines />

          <div className="oo-content-container">

            {/* Left Image */}
            <div className={`oo-sliding-image oo-image-left ${inView ? 'oo-in-view-left' : 'oo-out-view-left'}`}>
              <img
                src={onserver}
                alt="Track Visual"
                className="oo-img-asset"
              />
            </div>

            <TrackCard
              title="ON"
              subtitle="on"
              description="High-performance deployments from the edge. Exploring the intersection of data-driven architecture and elite engineering."
              inView={inView}
              delay={300}
              invertedArrow={true}
            />

            <TrackCard
              title="OFF"
              subtitle="off"
              description="Behind the curtain. Creative experiments, open-source collaborations, and side projects that define the off-server legacy."
              inView={inView}
              delay={500}
              invertedArrow={false}
            />

            {/* Right Image */}
            <div className={`oo-sliding-image oo-image-right ${inView ? 'oo-in-view-right' : 'oo-out-view-right'}`}>
              <img
                src={offserver}
                alt="Lifestyle Visual"
                className="oo-img-asset"
              />
            </div>

          </div>

          <div className="oo-vertical-branding">
            <div className="oo-v-line"></div>
            <span className="oo-v-text">Navneet// Portfolio 2.1</span>
          </div>
        </section>

        {/* SECTION 3: Stacking Image */}
        <section ref={stackSectionRef} className="oo-stack-section">
          <img
            ref={stackImageRef}
            src={onscrollimage}
            alt="Stacking Visual"
            className="oo-full-image"
          />
        </section>
      </div>

    </div>
  );
}