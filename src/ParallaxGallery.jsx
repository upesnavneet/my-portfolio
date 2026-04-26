import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const generateItems = (startIdx, count) => {
  return Array.from({ length: count }).map((_, i) => {
    const id = startIdx + i;
    return {
      id,
      src1: `https://picsum.photos/seed/gallery${id}a/400/500`,
      src2: `https://picsum.photos/seed/gallery${id}b/400/500`,
      title: `Project 0${id + 1}`,
      year: `202${4 + (id % 2)}`
    };
  });
};

const col1Items = generateItems(0, 4);
const col2Items = generateItems(4, 4);
const col3Items = generateItems(8, 4);
const col4Items = generateItems(12, 4);

export default function ParallaxGallery() {
  const containerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);
  const titleTopRef = useRef(null);
  const titleBottomRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(col1Ref.current, { y: '5%' }, {
        y: '0%', ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom bottom', scrub: true }
      });
      gsap.fromTo(col2Ref.current, { y: '35%' }, {
        y: '0%', ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom bottom', scrub: true }
      });
      gsap.fromTo(col3Ref.current, { y: '10%' }, {
        y: '0%', ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom bottom', scrub: true }
      });
      gsap.fromTo(col4Ref.current, { y: '25%' }, {
        y: '0%', ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom bottom', scrub: true }
      });

      // Header Text Parallax
      gsap.fromTo(titleTopRef.current, { y: -50 }, {
        y: 50, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: true }
      });
      gsap.fromTo(titleBottomRef.current, { y: -20 }, {
        y: 20, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: true }
      });
      gsap.fromTo(descRef.current, { y: 40 }, {
        y: -40, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const renderCard = (item) => (
    <div key={item.id} className="pg-card">

      <div className="pg-card-border">

        <div className="pg-card-fill">
          <div className="pg-card-img-wrap">
            <img src={item.src1} alt={item.title} className="pg-img pg-img-primary" />
            <img src={item.src2} alt={item.title} className="pg-img pg-img-secondary" />
          </div>
        </div>
      </div>

      <div className="pg-info">
        <span className="pg-label">{item.title}</span>
        <span className="pg-year">{item.year}</span>
      </div>
    </div>
  );

  return (
    <section className="pg-section" ref={containerRef}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .pg-section {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          height: auto;
          background: #0a0a0a; /* Matches location.jsx background */
          overflow: hidden;
          padding: 10vh 2vw;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* HEADER: Matches exact layout from reference */
        .pg-header {
          width: 100%;
          display: flex;
          align-items: flex-start;
          margin-bottom: 8vh;
          padding: 0 4vw; 
          gap: 15vw; /* Pushes subtitle to the middle */
        }

        .pg-header-titles { 
          display: flex; 
          flex-direction: column; 
          flex-shrink: 0;
        }

        .pg-title-top {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(3rem, 4.5vw, 5rem);
          font-weight: 900; /* Very bold like "HELMETS" */
          color: #FFF;
          line-height: 0.85;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -0.03em;
        }

        .pg-title-bottom {
          font-family: 'Playfair Display', serif; /* Serif font */
          font-size: clamp(3.2rem, 5vw, 5.5rem); /* Slightly larger */
          font-weight: 600;
          color: #FFF; /* Changed to White */
          line-height: 0.8; /* Very tight spacing */
          text-transform: uppercase;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .pg-header-desc { 
          max-width: 420px; 
          padding-top: 5px; /* Aligns with top of titles */
        }

        .pg-header-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(0.85rem, 1vw, 1rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.75); /* Light gray/white */
          margin: 0;
          line-height: 1.5;
        }

        .pg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.1vw;
          width: 100%;
          height: auto;
          align-items: flex-start;
          padding-bottom: 10vh;
        }

        .pg-col {
          display: flex;
          flex-direction: column;
          gap: 2.5vw;
          will-change: transform;
        }

        /* ===================== CARD ===================== */
        .pg-card {
          position: relative;
          width: 100%;
        }

        /* The stepped chamfer cutout */
        .pg-card-border {
          --cut-h: 38px;
          --cut-w1: 105px;
          --cut-w2: 130px;
          position: relative;
          width: 100%;
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% calc(100% - var(--cut-h)),
            calc(100% - var(--cut-w1)) calc(100% - var(--cut-h)),
            calc(100% - var(--cut-w2)) 100%,
            0% 100%
          );
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.15); /* Border color */
          padding: 1px; /* Border thickness */
          transition: background 0.4s ease;
        }

        .pg-card:hover .pg-card-border {
          background: #FFF; /* White hover */
        }

        .pg-card-fill {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% calc(100% - var(--cut-h)),
            calc(100% - var(--cut-w1)) calc(100% - var(--cut-h)),
            calc(100% - var(--cut-w2)) 100%,
            0% 100%
          );
          border-radius: 11px;
          background: #121212; /* Pure dark grey instead of bluish #16181D */
          padding: 10px; /* Inset padding for the image frame */
        }

        .pg-card-img-wrap {
          position: relative;
          width: 100%;
          padding-top: 100%; /* Square image */
          border-radius: 6px;
          overflow: hidden;
          background: #000;
        }

        .pg-img {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .pg-img-primary { 
          filter: grayscale(100%); /* Black and white filter */
        }

        .pg-img-secondary { 
          opacity: 0; 
          transform: scale(1.05); 
          /* No filter, so it shows in full color on hover */
        }
        
        .pg-card:hover .pg-img-primary { opacity: 0; }
        .pg-card:hover .pg-img-secondary { opacity: 1; transform: scale(1); }

        /* ===================== TEXT ===================== */
        .pg-info {
          position: absolute;
          bottom: 8px;
          right: 5px;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .pg-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          color: #FFF;
          font-size: clamp(0.7rem, 0.8vw, 0.9rem);
        }

        .pg-year {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          color: #FFF; /* Changed to White */
          font-size: clamp(0.75rem, 0.9vw, 1rem);
        }

        /* ===================== RESPONSIVE ===================== */
        @media (max-width: 1024px) {
          .pg-grid { grid-template-columns: repeat(2, 1fr); }
          .pg-col-3, .pg-col-4 { display: none; }
          .pg-header { flex-direction: column; gap: 20px; padding: 0 2vw; }
        }
        @media (max-width: 600px) {
          .pg-grid { grid-template-columns: 1fr; }
          .pg-col-2 { display: none; }
        }
      `}} />

      <div className="pg-header">
        <div className="pg-header-titles">
          <h2 className="pg-title-top" ref={titleTopRef}>EVENTS</h2>
          <h2 className="pg-title-bottom" ref={titleBottomRef}>HALL OF FAME</h2>
        </div>
        <div className="pg-header-desc" ref={descRef}>
          <p className="pg-header-subtitle">If it worked, I built it. If it broke, I fixed it.<br></br> (all technical btw)</p>
        </div>
      </div>

      <div className="pg-grid">
        <div className="pg-col pg-col-1" ref={col1Ref}>
          {col1Items.map(renderCard)}
        </div>
        <div className="pg-col pg-col-2" ref={col2Ref}>
          {col2Items.map(renderCard)}
        </div>
        <div className="pg-col pg-col-3" ref={col3Ref}>
          {col3Items.map(renderCard)}
        </div>
        <div className="pg-col pg-col-4" ref={col4Ref}>
          {col4Items.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
