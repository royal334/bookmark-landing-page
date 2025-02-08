import React from 'react'
import Dots from  '/images/bg-dots.svg'
import Chrome from '/images/logo-chrome.svg'
import Firefox from '/images/logo-firefox.svg'
import Opera from '/images/logo-opera.svg'

function Download() {
  return (
    <>
     <section id='download' className='px-4 md:px-0 py-20'>
               <div className='container mx-auto'>
                    <div className='md:w-1/2 md:mx-auto text-center'>
                         <h2 className='text-[#252b46] font-bold text-3xl mb-4 md:mb-8'>Download the extension</h2>
                         <p className='text-[#9194a1] mb-10 md:mb-8'>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 justify-center'>
                         
                         <div className='bg-white px-4 rounded-xl py-10 flex flex-col items-center shadow-2xl md:mb-20'>
                              <img src={Chrome} alt="google chrome logo" />
                              <h3 className='text-[#252b46] font-bold text-xl mt-6 mb-2'>Add to Chrome</h3>
                              <p className='text-[#9194a1] mb-8'>Minimum version 62</p>
                              <img className='mb-6' src={Dots} alt="" />
                              <button className='bg-[#5368df] text-white py-2 px-4 rounded-lg cursor-pointer hover:text-[#5368df] hover:bg-white hover:border-[#5368df] hover:border-2 hover:shadow-lg~'>Add & Install Extension</button>
                         </div>

                         <div className='bg-white px-4 rounded-xl py-10 flex flex-col items-center shadow-2xl md:mt-10 md:mb-10'>
                              <img src={Firefox} alt="firefox logo" />
                              <h3 className='text-[#252b46] font-bold text-xl mt-6 mb-2'>Add to Chrome</h3>
                              <p className='text-[#9194a1] mb-8'>Minimum version 55</p>
                              <img className='mb-6' src={Dots} alt="" />
                              <button className='bg-[#5368df] text-white py-2 px-4 rounded-lg cursor-pointer hover:text-[#5368df] hover:bg-white hover:border-[#5368df] hover:border-2 hover:shadow-lg~'>Add & Install Extension</button>
                         </div>
                         
                         <div className='bg-white px-4 rounded-xl py-10 flex flex-col items-center shadow-2xl md:mt-20'>
                              <img src={Opera} alt="opera logo" />
                              <h3 className='text-[#252b46] font-bold text-xl mt-6 mb-2'>Add to Chrome</h3>
                              <p className='text-[#9194a1] mb-8'>Minimum version 46</p>
                              <img className='mb-6' src={Dots} alt="" />
                              <button className='bg-[#5368df] text-white py-2 px-4 rounded-lg cursor-pointer hover:text-[#5368df] hover:bg-white hover:border-[#5368df] hover:border-2 hover:shadow-lg~'>Add & Install Extension</button>
                         </div>
                    </div>
               </div>
     </section>
    
    </>
  )
}

export default Download