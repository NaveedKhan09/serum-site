import { motion } from "motion/react"
import using from '../assets/images/using.avif'
import arrow from '../assets/images/pointing_arrow.png'
import { routineSteps } from "../routineSteps"
export default function HowtoUse ({HowToUseRef}) {
    

    //---variants for elements (frammer motion)
    const ulVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    }

    const liVariants = {
        hidden: {opacity: 0, x: -15},
        show: {opacity: 1, x: 0}
    }
    return (
        <div id="HowtoUse" ref={HowToUseRef} className="bg-[#F2D8D7] flex flex-col justify-center items-center pt-4">
            <div className="w-full bg-[#FBACCC] h-[45px] flex items-center justify-center">
                <h1 className="itim-regular text-2xl tracking-[0.01em] text-white text-shadow-2xs text-shadow-[#F875AA]">How to Use</h1>
            </div>
            <div className="w-full max-w-[1536px] flex flex-col md:flex-row-reverse px-5 md:px-6 xl:px-12 mt-2 py-5 gap-7">
                <div className="w-full md:w-3/5">

                    <div className="px-2 py-1 rounded-md bg-[#F5F3F3] text-[#F875AA] max-w-[140px]">
                        <h1 className="itim-regular text-[22px] tracking-[0.01em] text-bold">Instructions</h1>
                    </div>
                    <motion.ul 
                        className='ml-2'
                        variants={ulVariants}
                        initial= "hidden"
                        whileInView= "show"
                        viewport={{once: true, amount: 0.5}}
                    >
                                            
                        {routineSteps.map((step,index) => {
                            return(
                                <motion.li 
                                    key={index}
                                    className='flex gap-2 mt-4'
                                    variants={liVariants}
                                >
                                    <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                                    <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>{step}</p>
                                </motion.li>
                            )
                        })}                    
                                            
                    </motion.ul>
                    
                </div>
                <motion.div 
                    className="w-full md:w-2/5"
                    initial={{opacity: 0, y:80}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.4}}
                    viewport={{once: true, amount: 0.4}}
                >
                    <img src={using} alt="product image" className='rounded-lg'/>
                </motion.div>

            </div>

        </div>
    )
}