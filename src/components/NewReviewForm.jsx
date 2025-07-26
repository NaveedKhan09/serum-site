import { useState } from 'react'
export default function NewReviewForm (props) {
    console.log(props.allReviews)
    // console.log(props.updatingFunction)
    
    const [dataErrorMessage, setDataErrorMessage] = useState(false);

    function Submit (formData) {
        const data = Object.fromEntries(formData)
        // props.updatingFunction()
        if(data.name.trim() === '' || data.country.trim() === '' || data.review.trim() === '') {
            setDataErrorMessage(true)
        }else{
            console.log(data)
            console.log(typeof data)
            props.setAllReviews((oldState) => [...oldState, data])
        }
            
        
    }

    return(
        <form action={Submit} className='w-full flex flex-col justify-center items-center py-1'>
            <div>
                <div className='flex flex-col sm:flex-row gap-4 pt-2'>
                    <div className='flex flex-col gap-6'>
                        <input 
                            type="text"
                            name='name'
                            className='bg-[#FBACCC] min-w-[340px] border p-2 rounded-md border-2 border-[#F875AA]'
                            placeholder='Name'
                        />
                        <input 
                            type='text'
                            name='country'
                            className='bg-[#FBACCC] min-w-[340px] border p-2 rounded-md border-2 border-[#F875AA]'
                            placeholder='Country'
                        />
                    </div>
                    <div>
                        <textarea 
                            name="review" 
                            id="message" 
                            className='bg-[#FBACCC] border min-w-[340px] h-full p-2 rounded-md border-2 border-[#F875AA]'
                            placeholder='Review'
                        ></textarea>
                        {dataErrorMessage && <p className='text-xs text-red-500'>please enter valid information.</p>}
                    </div>
                </div>

                <div className='flex justify-end gap-5 w-full mt-4'>
                    <button
                        onClick={()=> props.setNewReview(prev => !prev)}
                        type='button' 
                        className='nunito-regular px-2 py-1 border rounded-md border-2 border-[#F875AA] text-[#F875AA] cursor-pointer hover:bg-[#F875AA] hover:text-white hover:border-2 border-[#F875AA]'
                    >Cancel</button>
                    <button
                        className='nunito-regular px-2 py-1 border rounded-md border-2 border-[#F875AA] text-[#F875AA] cursor-pointer hover:bg-[#F875AA] hover:text-white hover:border-2 border-[#F875AA]'
                    >Submit</button>
                </div>    
            </div>

        </form>
    )
}