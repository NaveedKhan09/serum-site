import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export default function ItemAddMessage (props) {
    return(
        <>
        <div className={`fixed left-1/2 -translate-x-1/2 top-2 bg-[#F5F3F3] w-[210px] sm:w-[220px] flex items-center justify-center gap-2 p-2 rounded-md border transition-all duration-500 ease-in-out 
                        ${props.itemAddMessage ? "translate-y-6 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
            <p className='nunito-regular tracking-[0.01em] text-[#77666C] text-sm sm:text-base'>Item added Successfully</p> 
            <FontAwesomeIcon icon={faCheck} className='text-green-500 text-lg' />
        </div>
        </>
    )
}