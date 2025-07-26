
import Accordion from "./Accordion"

export default function FAQs () {
    
    return(
        <div className="faqs bg-[#F2D8D7] flex flex-col py-2 sm:py-5">
            <div className="w-full bg-[#FBACCC] h-[45px] flex items-center justify-center">
                <h1 className="itim-regular text-2xl tracking-[0.01em] text-white text-shadow-2xs text-shadow-[#F875AA]">Frequently Asked Questions</h1>
            </div>
            <h1 className="nunito-regular text-[#F875AA] text-2xl tracking-[0.01em] text-center px-4 sm:px-6 xl:px-12 mt-6">Most people asking for following questions.</h1>
            
            <Accordion />
            
        </div>
    )
}