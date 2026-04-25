import { useEffect, useRef, useCallback, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import INTROVIDEO from "./assets/INTROVIDEO.mp4";
import "./App.css";

import Hero from "./components/ui/XRayHover";
import Navbar from "./components/ui/Navbar/CardNav";
import Intro from "./intro"
import Timeline from './timeline';
import Onoff from './onoff';
import Affiliations from "./affiliations";
import Origins from "./location";


import logo from "./assets/Navbaricon/LOGO.png";

gsap.registerPlugin(ScrollTrigger);


function App() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const lenisRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoFading, setVideoFading] = useState(false);

  const handleScroll = useCallback(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;
    const progress = Math.min(scrollY / windowH, 1);

    const scale = 1 - progress * 0.15;
    const radius = progress * 40;

    hero.style.transform = `scale(${scale})`;
    hero.style.borderRadius = `${radius}px`;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  // Lock scroll while video plays
  useEffect(() => {
    if (videoPlaying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [videoPlaying]);

  // Initialize Lenis only after video is done
  useEffect(() => {
    if (videoPlaying) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [videoPlaying]);

  const handleVideoEnd = () => {
    setVideoFading(true);
    setTimeout(() => {
      setVideoPlaying(false);
      setVideoFading(false);
    }, 1500);
  };

  const items = [
    {
      label: "About",
      bgColor: "#093FB4",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#ED3500",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#FEB05D",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:kumarnavneet7765@gmail.com", ariaLabel: "Email us" },
        { label: "Instagram", href: "https://instagram.com/navx._n", ariaLabel: "Instagram" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/navneetkumar-", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <>
      {/* Intro Video Overlay */}
      {videoPlaying && (
        <div className={`intro-video-overlay ${videoFading ? 'fade-out' : ''}`}>
          <video
            ref={videoRef}
            src={INTROVIDEO}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="intro-video"
          />
        </div>
      )}
      <Navbar
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#ffffffff"
        menuColor="#000"
        buttonBgColor="#1b2335ff"
        buttonTextColor="#fff"
        ease="back.out(1.7)"
        theme="dark"
      />

      <div className="hero-sticky-container">
        <div ref={heroRef} className="hero-card">
          <Hero />
        </div>
      </div>

      <div className="content-above">
        <Intro />
        <Timeline />
        <Onoff />
        <Origins />
        <Affiliations />

      </div>
    </>
  );
}

export default App;