import { motion } from "framer-motion";
import { useState } from "react";
import {
  slideCollection,
  animateView,
  slideTitle,
} from "../../animations/animate";
import { destinationContent } from "../../config/lists";
import "./aboutUs.css";

const AboutUs = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <div className="about">
      <div className="about-banner">
        <img src="src\assets\pexels-nubikini-386025.jpg" alt="" />
        <div className="about-content">
          <h1>About</h1>
          <h3>Us</h3>
        </div>
      </div>
      <div className="about-content">
        <motion.div
          variants={animateView}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="about-content-container"
        >
          <h2>About Us</h2>
          <p>
            A cumulative 30 years' of both the founders in Maldives
            tourism/hospitality sector and understanding towards
            travellers'expectations, experiences, and problems. In contrast, the
            other founder has a successful tourism business in Cherai Kerala,
            popularly known as the hidden gem, and acquired great knowledge
            about the expectation of Indian tourists. Tawi Explores uncovered
            theaccessibility to the Maldives to Indians and built a robust
            relationship with trustworthy and exclusive luxury and ultra-luxury
            resorts in the Maldives to provide a real royal experience to our
            customers. The service caters to the needs of both B2B customers and
            B2C customers. The company provides customizable services to cater
            the individual needs. Tawi Explores has a highly enthusiastic and
            energetic team to meet customers' needs.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={animateView}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="about-destinations"
      >
        <div className="about-destinations-header">
          <h2>Famous Destinations</h2>
        </div>
        {destinationContent.map((data, i) => (
          <motion.div
            key={i}
            className="about-card"
            onMouseEnter={() => setHoveredCardIndex(i)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <img src={data.image} alt="" />
            <motion.h3
              variants={slideTitle}
              initial={"initial"}
              animate={hoveredCardIndex === i ? "animate" : "initial"}
            >
              {data.title}
            </motion.h3>
            <motion.div
              variants={slideCollection}
              initial="initial"
              animate={hoveredCardIndex === i ? "animate" : "initial"}
              className="about-destination-collection"
            >
              <ul>
                {data.collection.map((coll, j) => (
                  <li key={j}>{coll.content}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;
