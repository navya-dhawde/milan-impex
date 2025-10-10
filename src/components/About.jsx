import { useRef, useEffect } from "react";
import "../styles/Home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/upp.jpg";
import img2 from "../assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const container = aboutRef.current;
    const heading = container.querySelector("h2");
    const paragraph = container.querySelector("p");
    const images = container.querySelectorAll(".about-img");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    // Step 1: Animate the grey box (container background or opacity)
    tl.fromTo(
      container.querySelector(".about-box"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Step 2: Animate heading
    tl.fromTo(
      heading,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3" // overlaps a little with previous
    );

    // Step 3: Animate images in parallel
    tl.fromTo(
      images,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.4" // slightly overlaps with heading
    );

    // Step 4: Animate paragraph from bottom
    tl.fromTo(
      paragraph,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="about-container" ref={aboutRef}>
      <div className="about-box">
        <h2>About Us</h2>
        <p>
          MILAN IMPEX is a two decade old TRADING HOUSE which has witnessed revolutionary changes in technological advancement, business style, perception, mindset and changing geopolitical situations over two generations. It has withstood the test of time and emerged victorious owing to its virtues, ethos, principles and values, which has been the guiding force established by our Founder Members and has led the group to uncharted territories.
          <br /><br />
          We’re diversifying and building our portfolio in the direction to support the environment with heavy focus on recyclable and eco-friendly business. We’ve forayed into Metal Trading and Processing as well as Green Plastics Trading and Processing to support our vision of business.
          <br /><br />
          Over the years we have built business and partnerships based on reliability and performance. This has helped set benchmarks in supplying reliable products, offering rational pricing and delivering responsible services to clients across the spectrum.
          <br /><br />
          Drawing heavily from its traditional ethics and modern business outlook, the Group with its customer centric approach has built and strives to build long term relationships and believes in delighting the customer rather than just satisfying them.
        </p>
      </div>

      <div className="about-images">
        <img src={img1} alt="About Top" className="about-img top" />
        <img src={img2} alt="About Bottom" className="about-img bottom" />
      </div>
    </div>
  );
}
