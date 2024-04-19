import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { faqQuestions } from '../../config/lists'
import './faq.css'
const Faq = () => {
    const [question, setQuestion] = useState(null)
    return ( 
        <>
        <div className="faq">
            <div className="faq-questions">
            <h2>FAQ</h2>
            {
                faqQuestions && faqQuestions.map((data,i) => (
                    <div className="question-answer" key={i}>
                    <div className="question-tag" 
                    onClick={() => setQuestion( question === i ? null : i )}
                   >
                     {data.question}  
                     {
                        question === i ? <FaCircleMinus/> : <FaCirclePlus/>
                     } 
 
                    </div> 
                    <AnimatePresence>
                        {
                            question === i && 
                            <motion.div 
                            initial={{
                                opacity:0,
                                height:0
                            }}
                            animate={{
                                opacity:1,
                                height:"auto"
                            }}
                            exit={{
                                opacity:0,
                                height:0
                            }}
                            className="answers">
                                {data.answer}
                            </motion.div>
                        }
                       
                        </AnimatePresence> 
                    </div>
                   
                ))
            }
            
            </div>
        </div>
        </>
     );
}
 
export default Faq;