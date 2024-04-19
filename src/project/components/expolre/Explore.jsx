import { motion } from 'framer-motion';
import { animateView } from '../../animations/animate'
import './explore.css'
const Explore = () => {
  const chooseUs = [
    {
      image:"src/assets/personalized.png.png",
      text1:"Personalized",
      text2:"Consultation"
    },
    {
      image:"src/assets/Bestprice.png.png",
      text1:"Personalized",
      text2:"Consultation"
    },
    {
      image:"src/assets/Customercare.png.png",
      text1:"Personalized",
      text2:"Consultation"
    },
    {
      image:"src/assets/speedy20response.png.png",
      text1:"Personalized",
      text2:"Consultation"
    },
  ]
  return (
    <div className="explore">
      <motion.div
      variants={animateView}
      initial={'initial'}
      whileInView={"animate"}
      viewport={{once:true}}
       className="content">
        <h2>Explore With Us</h2>
        <p>
          A limitless horizon. Teal skies that melt into turquoise waters, and a
          gentle breeze that cocoons you. Picture the most breath-taking beach
          you've ever stepped foot on, and an impossibly idyllic island that
          makes for a dream getaway. Maldives, officially the Republic of
          Maldives, is a country in the Indian subcontinent of Asia, situated in
          the Indian Ocean. It lies Southwest of Sri Lanka and India, about 750
          kilometres from the Asian continent's mainland. Comprising a territory
          spanning roughly 90,000 square kilometres including the sea, land area
          of all the islands comprises 298 square kilometres .
        </p>
        <h3>Why Choose Us?</h3>
        <div className='choose-us'>
          {
            chooseUs.map((data,i) => (
              <div className='container' key={i}>
                <img  src={data.image} alt="" />
                <h3>{data.text1} <br />
                {data.text2}
                </h3>
               
              </div>
              
            ))
          }
        </div>
        <button>Get In Touch</button>
      </motion.div>
    </div>
  );
};

export default Explore;
