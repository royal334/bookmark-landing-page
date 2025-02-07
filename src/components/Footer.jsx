import React from 'react'

function Footer() {
  return (
    <section className='px-4 md:px-0 py-6 bg-[#252b46]'>
          <div className='container mx-auto'>
               <div className='flex flex-col md:flex-row justify-between md:w-full items-center md:items-start'>
                    <div className="flex flex-col md:flex-row items-center md:gap-10">
                         <img className='mb-4 md:mb-0' src="/images/white-logo.svg" alt="" />
                         <ul className="flex flex-col items-center md:flex-row md:space-x-4">
                                        <li><a href="#" className="block py-2 md:py-0 uppercase text-white hover:text-[#fa5757]">Features</a></li>
                                        <li><a href="#" className="block py-2 md:py-0 uppercase text-white hover:text-[#fa5757]">Pricing</a></li>
                                        <li><a href="#" className="block py-2 md:py-0 uppercase text-white hover:text-[#fa5757]">Contact</a></li>
                         </ul>
                    </div>
                    <div className='flex gap-8 mt-4 md:mt-0 md:gap-4'>
                         <img className='cursor-pointer hover:text-[#fa5757]' src="/images/icon-facebook.svg" alt="facebook icon" />
                         <img className='cursor-pointer hover:text-[#fa5757]' src="images/icon-twitter.svg" alt="twitter icon" />
                    </div>
               </div>
          </div>
    </section>
  )
}

export default Footer