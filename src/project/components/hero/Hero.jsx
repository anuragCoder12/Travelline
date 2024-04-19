import './hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  
    return ( 
        <>
        <div className="hero">
            <video src="src\assets\70463-538463758_small.mp4" autoPlay muted loop/>
            <motion.div 
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 3}}
            className="content">
                <h1>Unlock Your Travel Dreams</h1>
                <h1>With Us</h1>
                <p>Discover the worlds most adventerous nature, life is so short for a trip </p>
                {/* <button>GET STARTED</button> */}
            </motion.div>
            
        </div>
        </>
     );
}
 
export default Hero;