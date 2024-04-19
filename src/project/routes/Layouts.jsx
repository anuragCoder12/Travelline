import {  Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/home/Home';
import Destination from '../pages/destination/Destination';
import Footer from '../components/footer/Footer';
import ExploreDestination from '../pages/exploreDestinations/ExploreDestination';
import AboutUs from '../pages/aboutUs/AboutUs';

const Layout = () => {
    const location = useLocation()
    return ( 
        <>
       <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>}/>
                <Route path='/destination' element={<Destination/>}/>
                <Route path='/explore/:exploreId' element={<ExploreDestination/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>


            </Routes>
            <Footer/>
            </AnimatePresence>
        </>
     );
}
 
export default Layout;