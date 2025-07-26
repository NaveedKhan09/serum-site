import { motion } from "motion/react"
import arrow from '../assets/images/pointing_arrow.png'
import ing from '../assets/images/ing.webp'
export default function Ingredients ({IngredientsRef}) {
    return (
        <div id="Ingredients" ref={IngredientsRef} className="bg-[#F2D8D7] flex flex-col justify-center items-center">
            <div className="w-full bg-[#FBACCC] h-[45px] flex items-center justify-center">
                <h1 className="itim-regular text-2xl tracking-[0.01em] text-white text-shadow-2xs text-shadow-[#F875AA]">Ingredients</h1>
            </div>
            <div className="w-full max-w-[1536px] flex flex-col md:flex-row px-5 md:px-6 xl:px-12 py-5 gap-7">
                <motion.div 
                    className="w-full md:w-3/5"
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.4}}
                    viewport={{once: true, amount: 0.1}}
                >
                    <div className="px-2 py-1 rounded-md bg-[#F5F3F3] text-[#F875AA] max-w-[200px]">
                        <h1 className="itim-regular text-[22px] tracking-[0.01em] text-bold">List of Ingredients</h1>
                    </div>
                    <ul className='ml-2'>
                                                                
                        <li className='flex gap-2 mt-4'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'><span className='font-semibold'>Vitamin C</span> – Brightens dull skin, evens out tone, and helps fade dark spots.</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'><span className='font-semibold'>Hyaluronic Acid</span> – Provides deep hydration and plumps skin for a smoother look.</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'><span className='font-semibold'>Niacinamide</span> – Refines pores, smooths skin texture, and supports a healthy barrier.</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'><span className='font-semibold'>Green Tea Extract</span> – Calms irritation and protects against environmental damage.</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'><span className='font-semibold'>Aloe Vera</span> – Soothes, hydrates, and softens sensitive or dry skin.</p>
                        </li>
                                                                
                    </ul>   
                    <div className="px-2 py-1 rounded-md bg-[#F5F3F3] text-[#F875AA] max-w-[140px] mt-5">
                        <h1 className="itim-regular text-[22px] tracking-[0.01em] text-bold">Our Promise</h1>
                    </div>  
                    <ul className='ml-2'>
                        <li className='flex gap-2 mt-3'>
                            <p className='w-[22px] h-[22px] mt-1' >✅</p> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>Vegan & Cruelty-Free</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <p className='w-[22px] h-[22px] mt-1' >✅</p> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>Dermatologist-Tested</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <p className='w-[22px] h-[22px] mt-1' >✅</p>
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>Safe for all skin types</p>
                        </li>
                    </ul>   
                </motion.div>

                <motion.div 
                    className="w-full md:w-2/5"
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.4}}
                    viewport={{once: true, amount: 0.1}}
                >
                    <img src={ing} alt="product image" className='rounded-lg w-full h-full object-cover' />
                </motion.div>
            </div>
        </div>
    )
}