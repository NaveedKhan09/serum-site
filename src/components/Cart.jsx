import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import proImage from '../assets/images/ing.webp';
export default function Cart (props) {

    const [totalPrice, setTotalPrice] = useState(0)
    // console.log(props.cartItems)

    useEffect(() => {
        //--calculating total price of products
        const total = props.cartItems.reduce((sum,currentVal) => sum+(currentVal.price*currentVal.quantity) ,0)
        setTotalPrice(total)

        //--calculating total quantity of products
        const totalQuantity = props.cartItems.reduce((acc, currentVal) => acc + currentVal.quantity ,0)
        props.setTotalItemsCount(totalQuantity)
    },[props.cartItems])

    
    //---function to remove item from cart
    function removeItem (idToRemove) {
        const updatedArray = props.cartItems.filter((element) => element.id !== idToRemove);
        props.setCartItems(updatedArray)
    }
    
    //---function to increase quantity
    function increaseQuantity (productToIncrease) {
        const increasedArray = props.cartItems.map(item => 
            item.id === productToIncrease.id
              ? {...item, quantity: item.quantity + 1}
              : item
        )
        props.setCartItems(increasedArray)
    }

    //---function to decrease quantity
    function decreaseQuantity (productToDecrease) {
        const decreasedArray = props.cartItems.map(item => 
            item.id !== productToDecrease.id 
                ? item
                : (item.quantity > 1)
                    ? {...item, quantity:item.quantity-1} 
                    : item
              
        )
        props.setCartItems(decreasedArray)
    }

    return(
        <>
        {props.isCartOpen && <div className="bg-[#FC9EC3] w-[320px] h-[450px] fixed top-20 right-0 rounded z-20">
            <div className="text-center p-2 border-b border-[#F2D8D7] flex justify-between">
                <div className="flex items-center justify-end w-[60%]">
                    <div>
                        <p className="nunito-regular text-lg text-white tracking-[0.01em] font-bold">My Cart</p>
                        <p className="nunito-regular text-xs text-[#77666C] tracking-[0.01em]">Items: {props.totalItemsCount}</p>
                    </div>
                </div>
                <div className="flex items-center justify-end w-[40%]">
                    <FontAwesomeIcon 
                        icon={faCircleXmark}
                        className="text-white text-xl cursor-pointer"
                        onClick={() => props.setIsCartOpen(prev => !prev)}
                    />
                </div>
                
            </div>
            <div className="px-2">
                <div className="h-[335px] overflow-y-auto">
                    {props.cartItems.length === 0
                        ? <div className="flex justify-center items-center h-full">
                            <p className="text-white text-[#77666C]">Your Cart is Empty!</p>
                          </div>
                        : props.cartItems.map((product, index) => {
                        
                    return(
                    <div key={index} className="border-2 border-[#F875AA] flex items-center justify-between p-2 mt-3 rounded">
                        <div className="flex items-center gap-1">
                            <img 
                                src={proImage}
                                alt="cart product image"
                                className="w-[50px] h-[50px] rounded"
                            />
                            <div className="nunito-regular text-white">
                                <p>{product.title}</p>
                                <div className="bg-[#F5F3F3] text-[#F875AA] flex border rounded items-center justify-center gap-2 px-2 py-1 max-w-[85px]">
                                  <button
                                    onClick={() => decreaseQuantity(product)} 
                                    className="border border-[#bfbfbf] rounded text-base font-semibold h-5 w-5 flex justify-center items-center"
                                  >-</button>
                                  <p className="text-sm">{product.quantity}</p>
                                  <button 
                                    onClick={() => increaseQuantity(product)}
                                    className="border border-[#bfbfbf] rounded text-base font-semibold h-5 w-5 flex justify-center items-center"
                                  >+</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-white">price: ${product.price}</p>
                            <button 
                                className="bg-pink-300 text-xs text-red-600 text-center border border-red-400 px-1 rounded cursor-pointer"
                                onClick={() => removeItem(product.id) }
                            >Remove</button>
                        </div>
                        
                    </div>
                    )
                    })
                    }

                </div>
                
                <div className="w-full flex justify-between border-t-2 border-[#F2D8D7] px-1 py-1 mt-3">
                    <p className="text-white font-semibold">Total:</p>
                    <p className="text-white">${totalPrice}</p>
                </div>
            </div>
        </div>}
        </>
    )
}