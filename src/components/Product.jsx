import { useRef, useEffect } from "react";
import "../styles/Home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bigImg from "../assets/home2.jpg";
import small1 from "../assets/met4.jpeg";
import small2 from "../assets/met7.jpeg";
import small3 from "../assets/met5.jpeg";
import prod2 from "../assets/prod2.png";
import prod3 from "../assets/prod3.png";
import prod4 from "../assets/prod4.png";
import prod5 from "../assets/prod5.png";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const productsRef = useRef(null);

  useEffect(() => {
    const container = productsRef.current;
    const heading = container.querySelector(".products-heading");
    const leftImages = container.querySelectorAll(".products-left img");
    const rightBox = container.querySelector(".products-info");
    const workItems = container.querySelectorAll(".work-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    // Step 1: Animate main heading
    tl.fromTo(
      heading,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Step 2: Animate left-side images
    tl.fromTo(
      leftImages,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.4" // slightly overlaps with heading
    );

    // Step 3: Animate right-side grey box
    tl.fromTo(
      rightBox,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=1"
    );

    // Step 4: Animate individual work-items (products below)
    tl.fromTo(
      workItems,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=1"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="products" className="products-container" ref={productsRef}>
      <h2 className="products-heading">Our Products</h2>

      <div className="products-content">
        {/* Left side with images */}
        <div className="products-left">
          <img src={bigImg} alt="Main Product" className="big-image" />
          <div className="small-images">
            <img src={small1} alt="Product 1" />
            <img src={small2} alt="Product 2" />
            <img src={small3} alt="Product 3" />
          </div>
        </div>

        {/* Right side grey box */}
        <div className="products-info">
          <h3>Metal Scrap Processor</h3>
          <p>
Importer, Trader and Processor for Non-Ferrous Scrap, Stainless Steel Scrap and Ferrous Scrap.

<br/><br/>Committed to growth , Milan Impex is a leading importer and processor of Non-ferrous metal scrap (i.e. Shredded Zurik Scrap and Aluminium Zorba) from long term suppliers looking at establishing itself as a truly innovative company in the metal world. It embarks on creating & developing newer markets viz. UAE, Central Europe, USA, etc. and adding them in to the mainline of the business networks. It also looks at dredging into trading opportunities which allows integration to its current activities.

<br/><br/>To make a significant contribution towards resource management and conservation, we provide raw material, in the form of scrap, to recycling industries and furnaces in India. We also export Aluminium Ingots, ferro alloys and other base metals around the globe.

<br/><br/>Our products command respect in the market and are recognized by the Group’s capability to deliver reliable products of supreme quality.
          </p>
        </div>
      </div>

      {/* Individual product items */}
      <div className="work-container">
        <div className="work-item">
          <div className="image-wrapper">
            <img src={prod2} alt="Work 1" className="work-img" />
            <div className="pill-tag"><h5>PLA based products</h5></div>
          </div>
          <div className="hover-text">
            <h1>PLA based products</h1>
            <p>Under our brand Clearth, we manufacture innovative medical products and packaging solutions using PLA (polylactic acid), redefining the role of green plastics in sustainable healthcare and packaging industries. Clearth reflects our mission to create a cleaner, healthier Earth through responsible innovation.
Visit our website:   <a href="https://www.clearth.in" target="_blank" class="green-link">www.clearth.in</a></p>
          </div>
        </div>

        <div className="work-item">
          <div className="image-wrapper">
            <img src={prod3} alt="Work 2" className="work-img" />
            <div className="pill-tag"><h5>Machinery Import</h5></div>
          </div>
          <div className="hover-text">
            <h1>Machinery Import</h1>
            <p>In collaboration with multiple China-based manufacturers, we import and trade a wide range of high-performance machinery to meet the diverse needs of our clients across industries. Our commitment goes beyond supply—we also provide reliable after-sales service and technical support to ensure optimal performance and long-term value. <br/>Our product portfolio includes:Packaging Machines, CNC Machines, Vacuum Foaming Machines, Metal Recycling Machines, E-Waste Recycling Machines, Lithium Battery / Black Mass Processing Machines</p>
          </div>
        </div>

        <div className="work-item">
          <div className="image-wrapper">
            <img src={prod4} alt="Work 3" className="work-img" />
            <div className="pill-tag"><h5>Mould Maker</h5></div>
          </div>
          <div className="hover-text">
            <h1>Mould Maker</h1>
            <p>Leveraging extensive experience in mould processing and close collaboration with numerous China-based moulding companies, we supply precision-engineered and complex moulds to a wide range of OEM suppliers in the automotive and other industries.</p>
          </div>
        </div>

        <div className="work-item">
          <div className="image-wrapper">
            <img src={prod5} alt="Work 4" className="work-img" />
            <div className="pill-tag"><h5>Alkaline Water Ionizers</h5></div>
          </div>
          <div className="hover-text">
            <h1>Alkaline Water Ionizers</h1>
            <p>Exclusive Importer and Distributor of Mediqua, South Korea.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
