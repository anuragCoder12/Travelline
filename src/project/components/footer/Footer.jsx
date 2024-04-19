import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { footerLinks } from '../../config/lists'
import './footer.css'
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
   
    const socialMedia = [
        {
            icon:<FaFacebookF/>
        },
        {
            icon:<FaInstagram />
        },
        {
            icon:<FaXTwitter />

        }
    ]
    return ( 
        <>
        <div className="footer">
            
            <div className='content'>
            <div className='line'></div>
            <div className="content-details">
                <div className="logo">
                    <img src="src\assets\travel-traveling-logo-tour-and-travel-logo-design-free-vector-removebg-preview.png" alt="" />
                </div>
                <div className="links">
                    {
                        footerLinks.map((data,i) => (
                            <div key={i} className="tags">
                           <p >{data.title}</p> 
                           </div>
                        ))
                    }
                </div>
            </div>
            <div className='line'></div>
            </div>
            <div className='contact'>
               <div className="contact-details">
                +019893989
               </div>
               <div className="contact-details">
                asjhnh@gmail.com
               </div>
               <div className="contact-details">
                suresh fgygfhghfg , <br /> near vhghjnmnj.
               </div>
               <div className="social">
                {
                    socialMedia.map((item,i) => (
                        <div key={i} className="icons">{item.icon}</div>
                    ))
                }
                
               </div>
            </div>
            
        </div>
        </>
     );
}
 
export default Footer;