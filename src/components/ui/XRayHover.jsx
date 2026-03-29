import front from "../../assets/me/front.png";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";
import "./XRayScanner.css";

export default function MyComponent() {
  return (
    <div className="xray-wrapper">
      <div className="scroll-bg">
        <ScrollVelocity
          texts={['NAVNEET KUMAR • DATA SCIENCE ENTHUSIAST •', 'WEB DEVELOPER • CREATIVE DESIGNER']}
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