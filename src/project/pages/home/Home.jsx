import Explore from "../../components/expolre/Explore";
import Hero from "../../components/hero/Hero";
import Middle from "../../components/middle/Midddle";
import OurBrands from "../../components/ourBrands/OurBrands";
import { motion } from "framer-motion";
import { pageTransition } from "../../animations/animate";
import Faq from "../../components/faq/Faq";

const Home = () => {

    return ( 
        <>
        <motion.div
        variants={pageTransition}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        
        >
        <Hero/>
        <Explore/>
        <OurBrands/>
        <Middle/>
        <Faq/>
        </motion.div>
        </>
     );
}
 
export default Home;