import ImageMarquee from "./components/ui/ImageMarquee/ImageMarquee";
import onserver from "./assets/me/onserver.png";
import "./Footer.css";

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

function Footer() {
    return (
        <footer className="footer-outer">
            <div className="footer-wrapper">
                {/* Background layer: marquee fills entire section (like scroll-bg in hero) */}
                <div className="footer-marquee-bg">
                    <ImageMarquee
                        images={[logos]}
                        velocity={40}
                        numCopies={20}
                        parallaxClassName="footer-marquee-parallax"
                        scrollerClassName="footer-marquee-scroller"
                    />
                </div>

                {/* Foreground photo anchored at bottom center (like xray-image in hero) */}
                <img src={onserver} alt="Navneet Kumar" className="footer-photo" />

                {/* Text overlay on top */}
                <div className="footer-top">
                    <h2 className="footer-title">Ping me up sometime.</h2>
                    <h2 className="footer-title footer-title-serif">I Don't Byte ;)</h2>
                </div>

                {/* Left Column: Pages */}
                <div className="footer-side-col footer-col-left">
                    <span className="footer-col-label">PAGES</span>
                    <a href="#about" className="footer-col-link">ABOUT</a>
                    <a href="#projects" className="footer-col-link">PROJECTS</a>
                    <a href="#experience" className="footer-col-link">EXPERIENCE</a>
                    <a href="#contact" className="footer-col-link">CONTACT</a>
                    <a href="mailto:kumarnavneet7765@gmail.com" className="footer-col-link footer-col-highlight">EMAIL ME</a>
                </div>

                {/* Right Column: Socials */}
                <div className="footer-side-col footer-col-right">
                    <span className="footer-col-label">FOLLOW ON</span>
                    <a href="https://www.linkedin.com/in/navneetkumar-" target="_blank" rel="noopener noreferrer" className="footer-col-link">LINKEDIN</a>
                    <a href="https://instagram.com/navx._n" target="_blank" rel="noopener noreferrer" className="footer-col-link">INSTAGRAM</a>
                    <a href="https://github.com/upesnavneet" target="_blank" rel="noopener noreferrer" className="footer-col-link">GITHUB</a>
                </div>

            </div>

            {/* Bottom bar on the gradient */}
            <div className="footer-bottom">
                <p className="footer-copyright">© 2026 Navneet Kumar. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
