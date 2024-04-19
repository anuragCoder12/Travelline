import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../config/lists";
import "./navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, type: "tween" }}
          className="navbar"
        >
          <img src="src\assets\travel-traveling-logo-tour-and-travel-logo-design-free-vector-removebg-preview.png" alt="" />
          <div className="links">
            {navLinks.map((data, i) => (
              <p key={i} onClick={() => navigate(data.path)}>
                {data.title}
              </p>
            ))}
          </div>
         
          {
            isOpen ? 
            <RiCloseFill
            onClick={handleClick}
            className="hamburger"
            />
            :
            <GiHamburgerMenu
            onClick={handleClick}
            className="hamburger"
            />
          }
           {
              isOpen && 
              <motion.div
              initial={{left: "-100px", opacity: 0}}
              animate={{left: 0, opacity: 1}}
              transition={{duration: 0.8}}
               className="mobile-nav">
                  {navLinks.map((data, i) => (
              <p key={i} onClick={() => navigate(data.path)}>
                {data.title}
              </p>
            ))}
              </motion.div>
            }
        
        </motion.div>
        
           
          
      </div>
     
    </>
  );
};

export default Navbar;
