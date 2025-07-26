import { useState, useRef } from 'react';
import { reviews } from '../Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import dp from '../assets/images/Review_profile.jpg';
import NewReviewForm from './NewReviewForm';

export default function Reviews ({ReviewsRef}) {
    const [newReview,setNewReview] = useState(false);
    

    const [allReviews, setAllReviews] = useState(reviews);

    //---function for scrolling the review card in left or right direction 
    const SliderRef = useRef(null)
    const Scroll = (direction) => {
        const container = SliderRef.current;
        const cardWidth = 360 + 24;
        if(direction === 'left') {
            container.scrollLeft -= cardWidth;
        } else {
            container.scrollLeft += cardWidth;
        }

    }
    return (
        <div id="Reviews" ref={ReviewsRef} className="bg-[#F2D8D7] flex flex-col justify-center items-center py-4">
            <div className="w-full bg-[#FBACCC] h-[45px] flex items-center justify-center">
                <h1 className="itim-regular text-2xl tracking-[0.01em] text-white text-shadow-2xs text-shadow-[#F875AA]">Our Clients Reviews</h1>
            </div>
            <h1 className="nunito-regular text-[#F875AA] text-2xl tracking-[0.01em] text-center px-4 sm:px-6 xl:px-12 mt-6">Over 300+ Happy Clients Reviews</h1>
            <div className='w-full max-w-[1536px] flex px-4 sm:px-6 xl:px-12 mt-6 relative'>
                <button
                    onClick={()=> Scroll('left')}
                    className='absolute left-0 xl:left-23 top-1/2 -translate-y-1/2 text-white p-1 z-10'
                >

                    <FontAwesomeIcon icon={faCircleChevronLeft} className='text-[#F5F3F3] text-3xl cursor-pointer'/>

                </button>
                <button
                    onClick={()=> Scroll('right')}
                    className='absolute right-0 xl:right-23 top-1/2 -translate-y-1/2 p-1 z-10'
                >
                    <FontAwesomeIcon icon={faCircleChevronRight} className='text-[#F5F3F3] text-3xl cursor-pointer'/>
                </button>
                <div 
                    ref={SliderRef} 
                    className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x w-max max-w-[1075px] mx-auto space-x-4"
                >
                    {allReviews.map((item,index) => (
                    <div 
                        key={index} 
                        className='min-w-[340px] w-full max-w-[360px] min-h-[200px] bg-[#FBACCC] rounded-lg p-3 mr-6 last:mr-0 snap-start mt-10 hover:shadow-lg relative'
                    >

                        <img 
                            src={dp}
                            alt="Customer image"
                            className='w-[60px] h-[60px] rounded-full absolute top-[-30px] left-1/2 -translate-x-1/2 object-cover'
                        />
                        <div className='mt-8 min-h-[92px]'>
                            <p className='italic text-[#5E4F53] tracking-[0.01em]'>{item.review}</p>
                        </div>
                        <p className='mt-2 font-semibold text-[#604F55] tracking-[0.01em]'>{item.name}</p>
                        <p className='text-sm text-[#77666C] tracking-[0.01em]'>{item.country}</p>

                    </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-start px-4 sm:px-5 md:px-6 xl:px-14 mt-5 max-w-[1185px]'>
                <button
                    className='nunito-regular bg-[#F5F3F3] text-[#F875AA] p-2 rounded-md cursor-pointer'
                    onClick={() => setNewReview(!newReview)}
                >{!newReview ? "Write Review" : "Cancel Review"}</button>
            </div>
            {newReview && 

            // New Review component
            <NewReviewForm
                allReviews={allReviews}
                setAllReviews={setAllReviews}
                setNewReview={setNewReview}
            />}
        </div>
    )
}