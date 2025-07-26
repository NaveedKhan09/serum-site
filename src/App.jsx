import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductDetails from './components/ProductDetails'
import HowtoUse from './components/HowtoUse'
import Ingredients from './components/Ingredients'
import Reviews from './components/Reviews'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Products from './components/Products'
import ItemAddMessage from './components/ItemAddMessage'

function App() {
  const [ isCartOpen, setIsCartOpen ] = useState(false)
  const [ cartItems, setCartItems ] = useState([])   //---cart Array
  const [totalItemsCount, setTotalItemsCount] = useState(0)
  const [itemAddMessage, setItemAddMessage] = useState(false)

  
  //--Refs for smooth scroll
  const HowToUseRef = useRef(null)
  const ProductDetailsRef = useRef(null)
  const ReviewsRef = useRef(null)
  const IngredientsRef = useRef(null)
  const ProductRef = useRef(null)

  //---function for smooth scroll
  const ScrollToSection = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <>
      <Header 
        totalItemsCount={totalItemsCount}
        setIsCartOpen={setIsCartOpen}
        ScrollToSection={ScrollToSection}
        HowToUseRef={HowToUseRef}
        ProductDetailsRef={ProductDetailsRef}
        ProductRef={ProductRef}

      />
      <Hero 
        ReviewsRef={ReviewsRef} 
        ScrollToSection={ScrollToSection}
        ProductRef={ProductRef}
        IngredientsRef={IngredientsRef}
      />
      <ProductDetails 
        ProductDetailsRef={ProductDetailsRef} 
        ProductRef={ProductRef}
        ScrollToSection={ScrollToSection}
      />
      <Products 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        setItemAddMessage={setItemAddMessage}
        ProductRef={ProductRef}
      />
      <HowtoUse HowToUseRef={HowToUseRef} />
      <Ingredients IngredientsRef={IngredientsRef} />
      <Reviews ReviewsRef={ReviewsRef}/>
      <FAQs />
      <ItemAddMessage itemAddMessage={itemAddMessage} />
      
      <Footer />
      <Cart 
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen} 
        totalItemsCount={totalItemsCount}
        setTotalItemsCount={setTotalItemsCount}
      />
    </>
  )
}

export default App
