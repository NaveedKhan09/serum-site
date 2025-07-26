import { motion } from "motion/react"
import { useState } from "react"
import { faqs } from '../faq'
export default function Accordion () {
    const [openIndex, setOpenIndex] = useState(null);

    //---function for openenig each item in Accordion
    function flipOpen (index) {
        setOpenIndex(prevIndex => prevIndex === index ? null : index)
    }
    const [allFaq, setAllFaq] = useState(faqs)


    //---variants for elements (frammer motion)
    const parentVariants = {
        hide: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hide: {opacity: 0, y: 50},
        show: {opacity: 1, y: 0}
    }


    return(
        <motion.div 
            className="allFAQs w-full flex flex-col items-center justify-center mt-3 py-5"
            variants={parentVariants}
            initial= "hide"
            whileInView= "show"
            viewport={{once: true, amount: 0.1}}
        >

                { allFaq.map((item,index) => (
                    <motion.div 
                        key={index} 
                        className="bg-[#FBACCC] w-3/4 mt-5 min-w-[340px] rounded hover:bg-[#FC9EC3]"
                        variants={itemVariants}
                    >
                        <div className="flex justify-between p-3 cursor-pointer" onClick={() => flipOpen(index)}>
                            <p className="md:text-lg nunito-regular text-[#77666C] tracking-[0.01em]">{item.question}</p><span className="text-3xl">{openIndex === index ? "-" : "+"}</span>
                        </div>

                        { openIndex === index && (<div className="answer overflow-hidden transition-all duration-600 ease-in-out max-h-40 border-t-2 border-[#e3a5b9] p-4">
                            <p className="md:text-lg nunito-regular text-[#77666C] tracking-[0.01em]">{item.answer}</p>
                        </div> )}
                    </motion.div>
                ))}                
        </motion.div>
    )
}