import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageMarquee from "./components/ui/ImageMarquee/ImageMarquee";
import ScrollReveal from "./components/ui/ScrollReveal/ScrollReveal";
import "./TechStack.css";

gsap.registerPlugin(ScrollTrigger);

const logos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", alt: "Unreal Engine" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", alt: "R" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
];

function TechStack() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        const ctx = gsap.context(() => {
            gsap.to(section, {
                backgroundColor: "#f5f5f5",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });

            gsap.to(".ts-title-top", {
                color: "#0a0a0a",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });

            gsap.to(".ts-title-bottom", {
                color: "#0a0a0a",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });

            gsap.to(".ts-header-subtitle", {
                color: "rgba(0, 0, 0, 0.55)",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section className="ts-section" ref={sectionRef}>
            <div className="ts-header">
                <div className="ts-header-titles">
                    <h2 className="ts-title-top">TECH</h2>
                    <h2 className="ts-title-bottom">STACK</h2>
                </div>
                <div className="ts-header-desc">
                    <p className="ts-header-subtitle">
                        Languages, frameworks, and tools I use to turn caffeine into production-ready code.
                    </p>
                </div>
            </div>

            <div className="ts-marquee-wrap">
                <ImageMarquee
                    images={[logos]}
                    velocity={50}
                    numCopies={20}
                />
            </div>

            <div className="ts-reveal-section">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={15}
                    blurStrength={7}
                >
                    let's bring back the colors shall we?
                </ScrollReveal>
            </div>
        </section>
    );
}

export default TechStack;