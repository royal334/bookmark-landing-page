import React from 'react'
import HeroIllustration from '/images/illustration-hero.svg'

function Hero() {
  return (
    <>
    <section id= "hero" className='px-4 md:px-0'>
     <div className='container mx-auto py-20 flex flex-col md:flex-row justify-between gap-10'>
          <div className='md:order-3' >
               <img src={HeroIllustration} alt="hero-illustration" />
          </div>

          <div >
               <h1 className='text-[#252b46] text-center md:text-left text-4xl md:text-5xl font-bold mb-4 md:mb-8'>A Simple Bookmark Manager</h1>
               <p className='text-[#9194a1] mb-10 md:mb-8 text-center md:text-left text-xl md:text-base'>A clean and simple interface to orgainze your favourite website. Open a new browser tab and see your sites load instantly. Try it for free.</p>
               <div className='flex md:block justify-between'>
                    <button className='bg-[#5368df] text-white py-4 px-6 rounded-lg cursor-pointer hover:text-[#5368df] hover:bg-white hover:border-[#5368df] hover:border-2 hover:shadow-lg'>Get it on Chrome</button>
                    <button className='bg-[#e3e4e8] md:ml-4 py-4 px-6 rounded-lg cursor-pointer hover:border-2 hover:shadow-lg hover:bg-white'>Get it on Firefox</button>
               </div>
          </div>
     </div>
    </section>
    
    </>
  )
}

export default Hero