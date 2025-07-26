import { motion } from "motion/react"
import detailPic from '../assets/images/details.avif'
import arrow from '../assets/images/pointing_arrow.png'
export default function ProductDetails (props) {
    return(
        <div id="Product_Detail" ref={props.ProductDetailsRef} className="flex flex-col justify-center items-center bg-[#F2D8D7]">
            <div className="w-full bg-[#FBACCC] h-[45px] flex items-center justify-center">
                <h1 className="itim-regular text-2xl tracking-[0.01em] text-white text-shadow-2xs text-shadow-[#F875AA]">Product Detail</h1>
            </div>
            <div className="w-full max-w-[1536px] mt-2 flex flex-col md:flex-row px-5 md:px-6 xl:px-12 py-5 gap-7">
                <motion.div 
                    className="w-full md:w-3/5"
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 0.4}}
                    viewport={{once: true, amount: 0.4}}
                >
                    <div className="px-2 py-1 rounded-md bg-[#F5F3F3] text-[#F875AA] max-w-[200px]">
                        <h1 className="itim-regular text-[22px] tracking-[0.01em] text-bold">Glow Starts Here</h1>
                    </div>
                    <p className='nunito-regular text-lg text-[#77666C] tracking-[0.01em] mt-3'>Our Glow Serum is a lightweight, fast-absorbing formula that enhances your skin’s natural radiance. It helps improve tone, texture, and hydration for a smooth, balanced finish.</p>
                    
                    <div className="px-2 py-1 rounded-md bg-[#F5F3F3] text-[#F875AA] max-w-[140px] mt-5">
                        <h1 className="itim-regular text-[22px] tracking-[0.01em] text-bold">Key Benefits</h1>
                    </div>
                    <ul className='ml-2'>
                        
                        <li className='flex gap-2 mt-4'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>Brightens with stabilized Vitamin C to fade dullness and uneven tone.</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>Hydrates with multi-weight Hyaluronic Acid for lasting moisture.</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>Balances with Niacinamide to refine texture and minimize pores.</p>
                        </li>
                        <li className='flex gap-2 mt-3'>
                            <img src={arrow} alt="pointing arrow" className='w-[22px] h-[22px] mt-1' /> 
                            <p className='text-lg text-[#77666C] tracking-[0.01em] p-0'>Soothes with Aloe Vera and Green Tea for calm, refreshed skin.</p>
                        </li>
                        
                    </ul>
                    <div className='w-full md:w-2/3 mt-8 flex justify-center items-center py-5'>
                        
                        <motion.button 
                            onClick={() => props.ScrollToSection(props.ProductRef)}
                            className='itim-regular p-2 bg-[#F875AA] border border-2 border-[#F875AA] rounded-md text-lg text-white tracking-[0.01em] text-bold cursor-pointer'
                            whileHover={{y: -5, scale: 1.01}}
                        >Make a Purchase</motion.button>
                        
                    </div>
                    
                </motion.div>
                <motion.div 
                    className="w-full md:w-2/5 overflow-hidden"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "tween", visualDuration: 0.4 },
                    }}
                    viewport={{once: true}}
                >
                    <img 
                        src={detailPic} 
                        alt="product showcasing" 
                        className='w-full h-full md:object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105' 
                    />
                </motion.div>
            </div>
        </div>
    )
} 