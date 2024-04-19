import { useEffect, useRef } from "react";
import { useFirebase } from "../../store/firebaseoperations/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animateView, cardAnimate, pageTransition } from "../../animations/animate";
import "./destination.css";

const Destination = () => {
  const { getImageURL, getItems } = useFirebase();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = await getItems();

        const placesWithImages = await Promise.all(
          item.map(async (item) => {
            const imageUrl = await getImageURL(item.image);
            return { ...item, imageUrl };
          })
        );
        setPlaces(placesWithImages);
      } catch (error) {
        console.error("Error fetching place data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(places);
  const navigate = useNavigate();
  const observer = useRef();
  const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          img.setAttribute("src", src);
          observer.current.unobserve(img);
        }
      });
    });
    io.observe(target);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          img.setAttribute("src", src);
          observer.current.unobserve(img);
        }
      });
    });
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <motion.div
      variants={pageTransition}
       initial={"initial"}
        animate={"animate"}
        exit={"exit"}
       className="destination">
        <div className="destination-banner">
          <img src="src\assets\pexels-asad-photo-maldives-3601444.jpg" alt="" />
          <div className="destination-content">
            <h1>LOGO</h1>
            <h3>Lush</h3>
          </div>
        </div>
        <motion.div
          variants={animateView}
          initial={"initial"}
          whileInView={"animate"}
          className="destinationsubs"
        >
          <div className="parabox">
            <p>
              We have a passion for luxury travel,which began in the Maldives
              over 15 years ago.We are experts at creating bespoke luxury
              holidays and tailor-made journeys for our clients,so let our
              dedicated Luxury Travel Specialists use their considerable
              knowledge and first-hand experience to put together your dream
              escape
            </p>
          </div>
          <button>Download Borchure</button>
          <h2>Featured Destinations</h2>
          <div className="destinations">
            {places &&
              places.map((data, i) => (
                <motion.div
                  variants={cardAnimate}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  custom={i}
                  key={i}
                  onClick={() => navigate(`/explore/${data.id}`)}
                  className="deseination-cards"
                >
                  <img
                    src={data.imageUrl}
                    alt=""
                    data-src={data.imageUrl}
                    onLoad={(e) => lazyLoad(e.target)}
                  />
                  <h3>{data.title}</h3>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Destination;
