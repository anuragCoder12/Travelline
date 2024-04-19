import './middle.css'
import { motion } from 'framer-motion';
import { animateView } from '../../animations/animate'
const Middle = () => {
    
    const cardImages = [
        {
            image: "src/assets/div.background_image1.png"
        },
        {
            image: "src/assets/div.background_image.png"
        },
        {
            image: "src/assets/div.background_image3.png"
        },
    ]
    return ( 
        <>
        <div className="middle">
            <div className="middle-container">
            <motion.h2
            variants={animateView}
            initial="initial"
             whileInView= "animate"
             viewport={{once:true}}
            >Experience Each Moment!</motion.h2>
            
            <div className="contents">
                {
                    cardImages.map((data,i) => (
                <motion.div
                variants={animateView}
                initial="initial"
                 whileInView= "animate"
                 viewport={{once:true}}
                key={i} className="middle-card">
                    <img className='explore-image' src={data.image} alt="" />
                </motion.div>
                        
                    ))
                }
            </div>
            <motion.div 
            variants={animateView}
            initial="initial"
             whileInView= "animate"
             viewport={{once:true}}
            className="description">
                <p>The beauty of the Maldives is not only above the water. The Maldives is home to about five percent of the planet's reefs that comes with an explosion of color contributed by soft and hard corals that form them. The reefs are home to a thousand species of fish. Lured by the rich nutrients that flow in with the currents, large pelagic fishes such as manta rays and whale sharks also make the Maldives their home.</p>
            </motion.div>
            </div>
        </div>
        </>
     );
}
 
export default Middle;