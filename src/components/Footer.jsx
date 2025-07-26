export default function Footer () {
    return(
        <div className="w-full bg-[#F2D8D7] flex justify-center items-center">
            <div className="w-[100%] min-w-[375px] bg-[#FBACCC] text-center text-sm text-[#77666C] rounded-tl-lg rounded-tr-lg mt-2 p-2">
                <p>© {new Date().getFullYear()} Glow Serum. All rights reserved.</p>
            </div>
        </div>
        
    )
}