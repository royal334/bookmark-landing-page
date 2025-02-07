import React, { useState, useEffect }  from 'react'

function Header() {
     const[isOpen, setIsOpen] = useState(false)

     function toggleMenu(){
          setIsOpen(!isOpen)
     }

     function handleSmoothScroll(e, targetId){
          e.preventDefault();
          const targetElement = document.getElementById(targetId)
          if(targetElement){
               targetElement.scrollIntoView({behavior: 'smooth'})
          }
          setIsOpen(false)
     }

     useEffect(() => {
          if(isOpen){
               document.body.classList.add('overflow-hidden');
          }
          else{
               document.body.classList.remove('overflow-hidden');
          }

     }, [isOpen])

          return(
               <>
               <header >
                    <div className='container mx-auto flex justify-between items-center px-4 md:px-4 py-8 flex-wrap md:flex-nowrap'>
                         <img src="/images/logo-bookmark.svg" alt="logo" />
                         
                         <button className="md:hidden " onClick={toggleMenu}>
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                         </svg>
                         </button>

                         <nav className={`${isOpen ? 'block' : 'hidden'} md:block` + " w-full md:w-auto bg-[#252b46b3] md:bg-white h-full md:h-auto md:flex items-center justify-center md:space-x-4 md:space-y-0 py-4 md:py-0 absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-16 p-4"}>
                              <ul className="flex flex-col items-center md:flex-row md:space-x-4 h-[90%] md:h-auto gap-3 md:gap-5  ">
                                   <div className='border-t-2 border-[#9194a1] md:border-none w-full text-center'>
                                        <li><a onClick={(e) => handleSmoothScroll(e, 'features')} href="#features" className="block md:py-0 my-2 text-white md:text-black uppercase hover:text-[#fa5757] text-xl">Features</a></li>
                                   </div>
                                   <div  className='border-t-2 border-[#9194a1] md:border-none w-full text-center'>
                                        <li><a onClick={(e) => handleSmoothScroll(e, 'download')} href="#download" className="block md:py-0 my-2 text-white md:text-black uppercase hover:text-[#fa5757] text-xl">Pricing</a></li>
                                   </div>
                                   <div  className='border-t-2 border-b-2 border-[#9194a1] md:border-none w-full text-center'>
                                        <li><a onClick={(e) => handleSmoothScroll(e, 'cta')} href="#cta" className="block  md:py-0 my-2 text-white md:text-black uppercase hover:text-[#fa5757] text-xl">Contact</a></li>
                                   </div>
                                   <div className= 'w-full mt-2 md:mt-0 '>
                                        <li><a onClick={toggleMenu} href="#" className="block  md:py-0 my-2 w-full "><button className='text-white md:bg-[#fa5757] md:hover:bg-[#fb8888] uppercase border-2 border-white md:border-none w-full px-8 py-2 rounded cursor-pointer'>login</button></a></li>
                                   </div>
                                   {isOpen &&
                                   <div className='flex gap-10 mt-auto'>
                                        <img src='/images/icon-facebook.svg' alt='facebook icon' />
                                        <img src='/images/icon-twitter.svg' alt='twitter icon' />
                                   </div>
                                   }
                              </ul>
                         </nav>

                         
                    </div>
               </header>
               </>
          )
    

}

export default Header