import { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import your images
import img1 from "../assets/home1.jpg";
import img2 from "../assets/home2.jpg";
import img3 from "../assets/home3.jpg";

const slides = [
  { image: img1, heading: "Mother Nature needs to Protect That’s why we Recycle" },
  { image: img2, heading: "Providing Metal of supreme quality & Reliability" },
  { image: img3, heading: "Over 25 years of experience in trading & Manufacturing" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const headingRef = useRef(null);

  const nextSlide = () => {
    setDirection("next");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  if (!headingRef.current) return;

  const heading = headingRef.current;

  // Set the heading text
  heading.textContent = slides[current].heading;

  // Reset heading position instantly
  gsap.set(heading, { y: 50, opacity: 0 });

  // Animate heading from bottom
  gsap.to(heading, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.9,
    ease: "power3.out",
  });
}, [current]);



  return (
    <div id="home" className="home-container">
      <div className="slides-wrapper">
        {slides.map((slide, index) => {
          let position = "nextSlide";
          if (index === current) {
            position = "activeSlide";
          } else if (
            index === current - 1 ||
            (current === 0 && index === slides.length - 1)
          ) {
            position = "prevSlide";
          }

          return (
            <div
              key={index}
              className={`slide ${position} ${direction}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h1 className="slide-heading" ref={index === current ? headingRef : null}>
                {index === current ? "" : slide.heading}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="navigation">
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
      </div>
    </div>
  );
}
