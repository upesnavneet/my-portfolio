import front from "../../assets/me/front.png";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";
import "./XRayScanner.css";

export default function MyComponent() {
  return (
    <div className="xray-wrapper">
      <div className="scroll-bg">
        <ScrollVelocity
          texts={['NAVNEET KUMAR • PORTFOLIO •', 'WEB DEVELOPER • DATA SCIENCE ENTHUSIAST •']}
          velocity={100}
          className="custom-scroll-text"
          stiffness={400}
          numCopies={8}
          parallaxClassName="parallax"
          scrollerClassName="scroller" />
      </div>

      <img src={front} alt="me" className="xray-image" />
    </div>
  );
}