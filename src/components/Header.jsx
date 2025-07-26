import { useState,useRef,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import cartimage from '../assets/images/cart.png'
function Header(props) {
  
  //--function for opening Cart
  function flipCartOpens () {
    props.setIsCartOpen(old => !old)
  }
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  },[])
  
  const HomeRef = useRef(null)
  return (
    <>
    <div ref={HomeRef} className='w-full h-[75px] bg-[#F2D8D7]'>
      <div className='flex justify-between bg-[#FBACCC] w-full h-[75px] border-b border-[#e9a4b7] rounded-bl-lg rounded-br-lg'>
      <div className='flex items-center px-4'>
        <h1 className='itim-regular text-3xl text-white text-shadow-2xs text-shadow-[#F875AA]'>Serum</h1>
      </div>
      <div className='flex items-center justify-end gap-x-4 w-4/6'>
        {/* Desktop View */}
        <div className="navlinks hidden md:flex justify-around gap-4 itim-regular text-sm sm:text-base md:text-lg text-white w-4/5">
          <button onClick={() => props.ScrollToSection(HomeRef)} className='cursor-pointer relative group'>
            Home
            <span className='absolute bg-[#F875AA] h-[2.5px] left-0 -bottom-0.5 w-0 transition-all duration-400 group-hover:w-full'></span>
          </button>
          <button onClick={() => props.ScrollToSection(props.ProductRef)} className='cursor-pointer relative group'>
            Products
            <span className='absolute bg-[#F875AA] h-[2.5px] left-0 -bottom-0.5 w-0 transition-all duration-400 group-hover:w-full'></span>
          </button>
          <button onClick={() => props.ScrollToSection(props.ProductDetailsRef)} className='cursor-pointer relative group'>
            Product Details
            <span className='absolute bg-[#F875AA] h-[2.5px] left-0 -bottom-0.5 w-0 transition-all duration-400 group-hover:w-full'></span>
          </button>
          <button onClick={() => props.ScrollToSection(props.HowToUseRef)} className='cursor-pointer relative group'>
            How to Use
            <span className='absolute bg-[#F875AA] h-[2.5px] left-0 -bottom-0.5 w-0 transition-all duration-400 group-hover:w-full'></span>
          </button>

        </div>
        {/* Menu Bars */}
        <div className='md:hidden'>
          <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className='text-white text-lg cursor-pointer' />
        </div>
        {/*Cart Icon*/}
        <div className='border-l-2 border-[#F875AA] w-1/5 min-w-[60px] flex justify-center'>
          <div className='relative' onClick={flipCartOpens}>
            <a href="#">
              <img src={cartimage} alt="arrow icon" className='w-[30px]'/>
              <span className='rounded-[25px] bg-red-400 font-normal leading-none text-[10px] text-white flex justify-center items-center absolute -top-1 left-6 h-[15px] w-[15px]'>{props.totalItemsCount}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
    
    {/* Mobile View */}
    {isOpen && <div className='absolute w-full bg-[#FBACCC] itim-regular text-base text-white text-center flex flex-col space-y-2 pb-2 pt-3 h-auto shadow-md z-50'>
      <button onClick={() => setIsOpen(false)} className='absolute top-2 right-4 text-lg'>✖</button>
      <button onClick={() => props.ScrollToSection(HomeRef)}>Home</button>
      <button onClick={() => props.ScrollToSection(props.ProductRef)}>Products</button>
      <button onClick={() => props.ScrollToSection(props.ProductDetailsRef)}>Product Details</button>
      <button onClick={() => props.ScrollToSection(props.HowToUseRef)}>How to Use</button>
    </div>}
    </>
  )
}

export default Header