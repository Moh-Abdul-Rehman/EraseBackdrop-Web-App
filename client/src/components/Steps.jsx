import React from 'react'
import { assets } from '../assets/assets'

export const Steps = () => {
  return (
    <div className='mx-4 lg:mx-50 py-20 xl:py-40 '>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to Remove background <br/> Image in seconds</h1>
      <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>


           <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                 <img className='max-w-9' src={assets.upload_icon} alt=''/>
             <div>
                  <p className='text-xl font-medium'>Upload Image</p>
                  <p className='text-sm text-neutral-500 mt-1'>Choose an image from your device to begin <br/>  the background removal process.
</p>
             </div> 

           </div> 

           <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                 <img className='max-w-9' src={assets.remove_bg_icon} alt=''/>
             <div>
                  <p className='text-xl font-medium'>Instant Processing</p>
                  <p className='text-sm text-neutral-500 mt-1'>Our technology accurately removes background <br/> giving you a clean cutout.
</p>

             </div> 


           </div> 
           <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                 <img className='max-w-9' src={assets.download_icon} alt=''/>
             <div>
                  <p className='text-xl font-medium'>Download with Ease</p>
                  <p className='text-sm text-neutral-500 mt-1'>Save your professionally edited image <br/> & put it to work in your designs.</p>

             </div> 


           </div> 

        


      </div>



    </div>
  )
}
