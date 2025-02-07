import React from 'react'
import Carousel from './Carousel'
function Feautres() {
  return (
    <section className='px-4 md:px-0 py-20' id='features'>
     <div className='container mx-auto'>
          <div className="md:w-1/2 md:mx-auto">
               <h2 className='text-[#252b46] text-center font-bold mb-4 md:mb-8 text-3xl'>Features</h2>
               <p className='text-center text-[#9194a1] mb-10 md:mb-8 text-lg'>   Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.
               </p>
          </div>
          <Carousel/>
     </div>
    </section>
  )
}

export default Feautres