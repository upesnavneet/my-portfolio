import React, { useRef, useEffect } from 'react';
import { Menu, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import selection from '../src/assets/me/selection.png'
import GGj from '../src/assets/me/ggj.jpg'
import Thead from '../src/assets/me/techhead.mp4'
import ICPWCHL from '../src/assets/me/ICP_WCHL.jpg'
import AICWic from '../src/assets/me/AICWIC.jpg'
import UPESACM from '../src/assets/me/UPESACM.png'
import ladyAda from '../src/assets/me/LadyAda.jpeg'

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        id: 1,
        year: "NOVEMBER, 2024",
        title: "ACM Technical and Events Core Selection",
        width: "700px", height: "400px",
        marginTop: "10rem",
        label: "ACM, 2024",
        image: selection
    },
    {
        id: 2,
        year: "JANUARY, 2025",
        title: "Global Game Jam",
        width: "500px", height: "600px",
        marginTop: "2.5rem",
        label: "GGJ, 2025",
        image: GGj
    },
    {
        id: 3,
        year: "MAY, 2025",
        title: "Joint Technical Head for UPES ACM & ACM-W",
        width: "500px", height: "300px",
        marginTop: "-10rem",
        label: "ACM & ACM-W HEADS SELECTION, 2025",
        image: Thead,
        type: "video"
    },
    {
        id: 4,
        year: "OCTOBER, 2025",
        title: "Qualified for ICP WCHL, 2025 Nationals Round",
        width: "400px", height: "350px",
        marginTop: "4rem",

        label: "ICP, WCHL 2025",
        image: ICPWCHL
    },
    {
        id: 5,
        year: "December, 2025",
        title: "Hosted and organized AICWiC, 2025",
        width: "550px", height: "550px",
        marginTop: "5rem",
        label: "ACM-W Flagship Event AICWiC, 2025",
        image: AICWic
    },
    {
        id: 6,
        year: "December, 2025",
        title: "OC Member for LadyAda, 2025",
        width: "320px", height: "450px",
        marginTop: "-5rem",
        label: "ACM-W LadyAda, 2025",
        image: ladyAda
    },
    {
        id: 7,
        year: "JANUARY, 2026",
        title: "Designed and Developed the official UPES ACM  site",
        width: "850px", height: "400px",
        marginTop: "4rem",
        label: "UPES ACM WEBSITE for 2025-26",
        image: UPESACM
    },

];

const BackgroundElements = () => (
    <div className="bg-elements">
        <svg className="bg-svg" preserveAspectRatio="none">
            <path d="M-100,200 Q200,50 400,300 T900,100 T1400,400 T1900,200 T2400,400 T2900,100" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M-50,250 Q250,100 450,350 T950,150 T1450,450 T1950,250 T2450,450 T2950,150" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
        <div className="timeline-axis"></div>
    </div>
);

const GalleryItem = ({ item }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (item.type === 'video' && videoRef.current) {
            let wasVisible = false;

            const checkVisibility = () => {
                if (!videoRef.current) return;
                const rect = videoRef.current.getBoundingClientRect();

                // Consider it visible when its center enters the screen viewport
                const center = rect.left + rect.width / 2;
                const isVisible = center > 0 && center < window.innerWidth;

                if (isVisible && !wasVisible) {
                    // It just came into view: reset and play
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(console.error);
                } else if (!isVisible && wasVisible) {
                    // It just left view: pause
                    videoRef.current.pause();
                }

                wasVisible = isVisible;
            };

            gsap.ticker.add(checkVisibility);

            return () => {
                gsap.ticker.remove(checkVisibility);
            };
        }
    }, [item.type, item.image]);

    return (
        <div className="gallery-item group" style={{ marginTop: item.marginTop }}>
            <div className="item-text-container">
                <p className="year-text">{item.year}</p>
                <p className="title-text">{item.title}</p>
            </div>
            <div className="card-container" style={{ width: item.width, height: item.height }}>
                {item.type === 'video' ? (
                    <video ref={videoRef} src={item.image} muted playsInline className="card-image" />
                ) : (
                    <img src={item.image} alt={item.label} className="card-image" />
                )}
                <div className="card-overlay"></div>
                <div className="card-label-container">
                    <span className="card-label">{item.label}</span>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    const pinRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const pinContainer = pinRef.current;
        const scrollContainer = scrollRef.current;

        if (!pinContainer || !scrollContainer) return;

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinContainer,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    end: () => "+=" + (scrollContainer.scrollWidth - window.innerWidth)
                }
            });

            tl.to(scrollContainer, {
                x: () => -(scrollContainer.scrollWidth - window.innerWidth),
                ease: "none",
                duration: 1,
            }, 0);

            tl.to(pinContainer, {
                backgroundColor: "#E8DBB3",
                color: "#000000",
                ease: "none",
                duration: 1,
            }, 0);

            tl.to(".card-overlay", {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                ease: "none",
                duration: 0.3,
            }, 0.7);

            tl.to(".card-image", {
                filter: "grayscale(100%)",
                ease: "none",
                duration: 0.3,
            }, 0.7);
        }, pinRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="app-container" ref={pinRef}>
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Playfair+Display:italic,wght@700;800;900&display=swap');
        
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }

        .app-container {
          height: 100vh;
          width: 100vw;
          background-color: white;
          position: relative;
          font-family: 'Poppins', sans-serif;
          color: #0011ff;
          overflow: hidden;
        }

        .timeline-axis {
          position: absolute;
          top: 50%;
          left: 0;
          width: 5000px;
          height: 1px;
          background: linear-gradient(to right, transparent, currentColor, transparent);
          transform: translateY(-50%);
        }

        .timeline-node {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid #00008b;
          border-radius: 9999px;
          transform: translate(-50%, -50%);
          z-index: 20;
          transition: transform 0.5s ease;
        }

        .group:hover .timeline-node {
          transform: translate(-50%, -50%) scale(1.5);
        }

        .year-text {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.3em;
          color: currentColor;
          margin-bottom: 4px;
        }

        .title-text {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: currentColor; opacity: 0.8;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .group:hover .title-text {
          color: currentColor; opacity: 0.6;
        }

        .card-container {
          background-color: rgba(239, 246, 255, 0.5);
          backdrop-filter: blur(4px);
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 17, 255, 0.1);
          transition: all 0.7s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .group:hover .card-container {
          border-color: rgba(0, 17, 255, 0.5);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
          display: block;
        }

        .group:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(135, 206, 250, 0.4);
          mix-blend-mode: multiply;
          transition: background-color 0.5s ease;
        }

        .group:hover .card-overlay {
          background-color: transparent;
        }

        .card-label-container {
          position: absolute;
          bottom: 24px;
          left: 24px;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.5s ease;
        }

        .group:hover .card-label-container {
          opacity: 1;
          transform: translateY(0);
        }

        .card-label {
          color: white;
          background-color: #0011ff;
          padding: 4px 16px;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-style: italic;
        }

        /* --- Replaced Tailwind Classes --- */
        .timeline-header { position: absolute; top: 0; left: 0; width: 100%; padding: 2rem; display: flex; justify-content: space-between; align-items: flex-start; z-index: 50; box-sizing: border-box; }
        @media (min-width: 768px) { .timeline-header { padding: 3rem; } }
        .header-title-wrapper { display: flex; flex-direction: column; line-height: 0.8; }
        .header-brand { color: currentColor; font-weight: 900; font-size: 1.875rem; letter-spacing: -0.05em; text-transform: uppercase; }
        .header-version { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; }
        .version-text { color: currentColor; opacity: 0.8; font-weight: 900; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
        .pulse-dot { width: 4px; height: 4px; border-radius: 9999px; background-color: #3b82f6; animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes customPulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
        .header-buttons { display: flex; gap: 1rem; }
        .btn-archive { background-color: #0011ff; color: white; transition: all 0.3s ease; padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; text-transform: uppercase; font-size: 0.75rem; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.2); cursor: pointer; border: none; }
        .btn-archive:hover { background-color: #000ecb; }
        .btn-archive:active { transform: scale(0.95); }
        .btn-menu { background-color: rgba(0, 17, 255, 0.05); transition: background-color 0.3s ease; backdrop-filter: blur(12px); padding: 0.5rem; border-radius: 0.5rem; color: currentColor; border: 1px solid rgba(0, 17, 255, 0.1); cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .btn-menu:hover { background-color: rgba(0, 17, 255, 0.1); }
        
        .scroll-track { height: 100%; width: max-content; display: flex; flex-wrap: nowrap; align-items: center; position: relative; z-index: 10; padding-left: 10vw; padding-right: 10vw; overflow: visible; }
        
        .intro-block { flex-shrink: 0; width: 450px; margin-right: 6rem; margin-bottom: 10rem; text-align: left; }
        .intro-subtitle { font-size: 11px; font-weight: 900; letter-spacing: 0.5em; text-transform: uppercase; margin-bottom: 1rem; opacity: 0.8; display: block; }
        .intro-title { font-size: 1.875rem; color: currentColor; line-height: 1.1; font-family: 'Playfair Display', serif; font-style: italic; margin-bottom: 2rem; margin-top: 0; }
        .intro-highlight { color: currentColor; font-weight: 900; letter-spacing: -0.025em; font-style: normal; }
        .intro-divider { width: 6rem; height: 1.5px; background-color: currentColor; opacity: 0.5; }
        .intro-scroll-hint { margin-top: 1.5rem; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.8; display: block; }
        
        .gallery-item { flex-shrink: 0; position: relative; padding-left: 4rem; padding-right: 4rem; display: flex; flex-direction: column; align-items: center; cursor: default; }
        .item-text-container { margin-bottom: 1.5rem; text-align: center; }
        
        .end-block { flex-shrink: 0; width: 400px; margin-left: 5rem; display: flex; flex-direction: column; justify-content: center; }
        .end-text-big { font-size: 8vw; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; line-height: 1; margin: 0; display: block; color: black; }
        .end-text-small { font-size: 2vw; font-weight: 900; letter-spacing: 0.1em; margin-top: -1vw; margin-left: 0.25rem; display: block; color: black; }
        .end-spacer { flex-shrink: 0; width: 20vw; }
        
        .fixed-status { position: absolute; bottom: 2.5rem; left: 2.5rem; z-index: 50; font-weight: 900; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; opacity: 0.2; }
        .fixed-pagination { position: absolute; bottom: 2.5rem; right: 2.5rem; z-index: 50; display: flex; align-items: center; gap: 1rem; }
        
        .pagination-box { display: flex; border: 1px solid rgba(0, 17, 255, 0.1); padding: 0.5rem; border-radius: 0.25rem; gap: 0.25rem; background-color: white; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .pagination-number { color: currentColor; font-weight: 700; padding: 0.25rem 1rem; border-right: 1px solid rgba(0, 17, 255, 0.1); margin: 0; display: flex; align-items: center; }
        .pagination-bars { display: flex; align-items: center; padding-left: 1rem; padding-right: 1rem; gap: 0.5rem; }
        .bar-active { width: 1.5rem; height: 0.25rem; background-color: currentColor; border-radius: 99px; }
        .bar-inactive { width: 1.5rem; height: 0.25rem; background-color: rgba(0, 17, 255, 0.1); border-radius: 99px; }
        
        .bg-elements { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .bg-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.2; }
      `}} />

            <BackgroundElements />

            <header className="timeline-header">
                <div className="header-title-wrapper">
                    <span className="header-brand">NAVNEET</span>
                    <span className="header-brand">KUMAR</span>
                    <div className="header-version">
                        <span className="version-text">PORTFOLIO // v2.1</span>
                        <div className="pulse-dot"></div>
                    </div>
                </div>


            </header>

            <div ref={scrollRef} className="scroll-track">
                <div className="intro-block">
                    <span className="intro-subtitle">The Journey</span>
                    <p className="intro-title">
                        Tracing the <span className="intro-highlight">evolution</span> of thought, code, and speed across the digital landscape.
                    </p>
                    <div className="intro-divider"></div>
                    <span className="intro-scroll-hint">Scroll to explore my technical journey</span>
                </div>

                {items.map(item => (
                    <GalleryItem key={item.id} item={item} />
                ))}

                <div className="end-block">
                    <span className="end-text-big" style={{ color: 'black' }}>YET</span>
                    <span className="end-text-small" style={{ color: 'black' }}><span>UNWRITTEN</span></span>
                </div>

                <div className="end-spacer"></div>
            </div>
        </div>
    );
}