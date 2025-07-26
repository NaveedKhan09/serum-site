import { motion } from "motion/react"
import HeroImg from '../assets/images/Hero.avif'
import productImg from '../assets/images/product_image.webp'
import examplePic from '../assets/images/Review_profile.jpg'
import examplePic2 from '../assets/images/Review_profile2.avif'
function Hero (props) {
  return (
    <div ref={props.ReviewsRef} className='w-full min-h-[calc(100vh-75px)] flex justify-between flex-col md:flex-row bg-[#F2D8D7]'>
        <motion.div 
            className='Hero_Detail w-full md:w-2/5 flex flex-col justify-center items-center py-5'
            initial={{opacity: 0, y: 80}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
        >
            <div className='Top px-6 max-w-[500px]'>
                <h1 className='itim-regular text-[#F875AA] text-shadow-xs text-shadow-[#383838] text-6xl'>Glow Serum <br /> <span className='text-[40px]'>Reveal Radiance</span></h1>
                <p className='nunito-regular text-xl text-[#77666C] tracking-[0.01em] mt-4'>Infused with skin-loving ingredients for a healthy, luminous finish.</p>
                <button 
                    onClick={() => props.ScrollToSection(props.ProductRef)} 
                    className='bg-[#F875AA] py-2 border-2 border-transparent rounded-md text-white w-[130px] text-xl font-medium cursor-pointer mt-5 hover:text-[#F875AA] hover:bg-[#F2D8D7] hover:border-2 hover:border-[#F875AA]'
                >Buy Now</button>
            </div>

            <div className='Bottom w-full max-w-[500px] mt-15 flex justify-between px-6 gap-3'>

                <motion.div 
                    className='bg-[#F875AA] w-[155px] md:w-[180px] rounded-lg text-white flex justify-center items-center cursor-pointer gap-1 p-2'
                    onClick={() => props.ScrollToSection(props.IngredientsRef)}
                    whileHover={{y: -8, scale: 1.01}}
                >
                    <p className='nunito-regular tracking-[0.01em] text-sm md:text-base'> <span className='font-medium'>100%</span> Organic <br />Products</p>
                    <img src={productImg} alt="product image" className='rounded-[50%] w-[41px] md:w-[50px] h-[41px] md:h-[50px]'/>
                </motion.div>

                <motion.div 
                    className='bg-[#F875AA] w-[150px] md:w-[180px] p-2 rounded-lg text-white text-center'
                    whileHover={{y: -8, scale: 1.01}}
                >
                    <div className='flex justify-center items-center gap-1 md:gap-2'>
                        <h1 className='text-lg md:text-xl nunito-regular tracking-[0.01em] font-bold'>300+</h1>
                        <div title="Scroll to Reviews" className="cursor-pointer" onClick={()=> props.ScrollToSection(props.ReviewsRef)}>
                            <div className='buyersDps flex'>
                                <img src={examplePic} alt="product image" className='rounded-[50%] w-[30px] h-[30px] object-cover'/>
                                <img src={examplePic2} alt="product image" className='rounded-[50%] w-[30px] h-[30px] object-cover'/>
                            </div>
                        </div>
                    </div>
                    <p className='nunito-regular tracking-[0.01em] text-sm md:text-base'>Clients Reviews</p>
                </motion.div>
            </div> 
        </motion.div>

        <motion.div 
            className='HeroImage w-full md:w-3/5 h-[calc(100vh-75px)] overflow-hidden flex justify-center items-center'
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
        >
            <img 
                src={HeroImg} 
                alt="Hero image" 
                className='w-[650px] sm:w-[850px] md:w-full h-[70vh] sm:h-[90vh] md:h-[105vh] lg:h-[120vh] rounded-l-[45%]'
            />
        </motion.div> 
    </div>
  )
}

export default Hero