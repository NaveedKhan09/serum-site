import { useState, useRef} from 'react'
import { motion } from "motion/react"
import ProductImage from '../assets/images/details.avif'
import { products } from '../products'
export default function Products (props) {
    const [items, setItems] = useState(products);
    
    const messageTimerRef = useRef(null)
    
    //---function for adding new element to the Cart 
    function add_to_Cart (itemToAdd) {
        const isIncluded = props.cartItems.some( item => item.id === itemToAdd.id);
        console.log(isIncluded)
        if(isIncluded) {
            const newArray = props.cartItems.map((item) => 
                item.id === itemToAdd.id
                ? {...item, quantity: item.quantity+ 1} 
                : item
            )
            props.setCartItems(newArray)
            
        }else{
            props.setCartItems(prev => [...prev, {...itemToAdd, quantity:1}])
        }

        //---showing message when item added to Cart
        if(messageTimerRef.current) {
            clearTimeout(messageTimerRef.current)
        }
        props.setItemAddMessage(false)
        setTimeout(() => {
            props.setItemAddMessage(true)
            messageTimerRef.current = setTimeout(() => {
                props.setItemAddMessage(false)
                messageTimerRef.current = null
            }, 1200);
        }, 30);

    }
    

    //---frammer-motion variants for parent
    const containerVariants = {
        hidden: {},
        visible:{
            transition: {
                staggerChildren: 0.2,
            }
        }
    };
    
    //--frammer-motion variants for child
    const cardVariants = {
        hidden: {opacity:0, y:50},
        visible: {opacity:1, y:0}
    };
    return(
        <div id="Products" ref={props.ProductRef} className="bg-[#F2D8D7]">
            <div className="w-full bg-[#FBACCC] h-[45px] flex items-center justify-center">
                <h1 className="itim-regular text-2xl tracking-[0.01em] text-white text-shadow-2xs text-shadow-[#F875AA]">Products</h1>
            </div>
            <motion.div 
                className="flex justify-center sm:justify-start flex-wrap gap-6 w-full max-w-[1536px] px-5 md:px-6 xl:px-12 py-5"
                variants= {containerVariants}
                initial= "hidden"
                whileInView= "visible"
                viewport={{once:true, amount:0.4}}
            >
                {items.map((item) => {
                    return(
                        <motion.div 
                            key={item.id} 
                            className="Product_card w-[250px] bg-[#FBACCC] rounded p-2 hover:shadow-xl"
                            variants={cardVariants}
                            whileHover={{scale: 1.05}}
                        >
                            <div className='w-full h-[230px] overflow-hidden'>
                                <img 
                                    src={ProductImage} 
                                    alt="product image" 
                                    className="w-full h-[230px] rounded object-cover transition-transform duration-300 ease-in-out hover:scale-103 hover:overflow-hidden" 
                                />
                            </div>
                            <p className='tracking-[0.01em] mt-1 text-white text-center font-bold text-lg'>{item.title}</p>
                            <div className='min-h-[100px]'>
                                <p className='nunito-regular tracking-[0.01em] text-[#77666C] text-center'>{item.description}</p>
                            </div>
                            <div className='flex justify-center gap-4 px-2 pb-1 pt-2'>
                                <p className='nunito-regular text-white tracking-[0.01em] font-medium text-lg'>${item.price}</p>
                                <motion.button
                                    className='bg-[#F2D8D7] px-2 border-2  rounded-md text-[#F875AA] font-bold text-xs cursor-pointer'
                                    onClick={() => add_to_Cart(item)}
                                    whileTap={{scale:0.97}}
                                >ADD TO CART</motion.button>
                            </div>
                        </motion.div>
                    )
                })}

            </motion.div>
        </div>
    )
}