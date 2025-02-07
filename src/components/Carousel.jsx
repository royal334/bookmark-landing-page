import React,{ useState} from 'react'
import { motion } from 'motion/react'

const images = [
     '/images/illustration-features-tab-1.svg',
     '/images/illustration-features-tab-2.svg',
     '/images/illustration-features-tab-3.svg',
]
function Carousel() {
     const [ currentIndex, setCurrentIndex] = useState(0)

     function first(){
          setCurrentIndex(0)
     }

     function second(){
          setCurrentIndex(1)
     }         

     function third(){   
          setCurrentIndex(2)
     }

  return (
    <div>
          <div className='md:w-1/2 md:mx-auto flex flex-col md:flex-row justify-between items-center mb-8 md:border-b-[#9194a1] md:border-b-2'>
               <div className='border-[#9194a1] border-b border-t md:border-none w-full md:w-auto text-center'><button onClick={first} className={`${currentIndex == 0 ? 'border-b-2 border-b-[#fa5757] ': '' }`+'text-[#9194a1] text-lg py-4 cursor-pointer  hover:text-[#fa5757]'}>Simple Bookmarking</button></div>
               <div className='border-[#9194a1] border-b border-t md:border-none w-full md:w-auto text-center'><button onClick={second} className={`${currentIndex == 1 ? 'border-b-2 border-b-[#fa5757] ': '' }`+'text-[#9194a1] text-lg py-4 cursor-pointer hover:text-[#fa5757] '}>Speedy Searching</button></div>
               <div className='border-[#9194a1] border-b border-t md:border-none w-full md:w-auto text-center'><button onClick={third} className={`${currentIndex == 2 ? 'border-b-2 border-b-[#fa5757] ': '' }`+'text-[#9194a1] text-lg py-4 cursor-pointer hover:text-[#fa5757] '}>Easy Sharing</button></div>
          </div>
               <div className='flex flex-col justify-between gap-30 items-center md:flex-row '>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}  className='md:w-1/2'/>
                    <div className='md:w-1/2'>
                         {
                              currentIndex == 0 &&
                                        <motion.div
                                        key="slide-0"
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        >
                                        <h3 className='text-[#252b46] my-4 md:mt-0 md:mb-8 font-bold text-3xl md:text-4xl text-center md:text-left'>Bookmark in one click</h3>
                                        <p className='text-[#9194a1] text-center md:text-left'>  Organize your bookmarks however you like. Our simple drag-and-drop interface
                                                  gives you complete control over how you manage your favourite sites.
                                        </p>
                                        <button className='p-4 bg-[#5368df] rounded-lg text-white mt-8 hidden md:block cursor-pointer'>More Info</button>
                                        </motion.div>
                         }

                         {
                              currentIndex == 1 && 
                              <motion.div
                              key="slide-1"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              >
                                   <h3 className='text-[#252b46] my-4 md:mt-0 md:mb-8 font-bold text-3xl md:text-4xl text-center md:text-left'>Intelligent search</h3>
                                        <p className='text-[#9194a1] text-center md:text-left'>    Our powerful search feature will help you find saved sites in no time at all. 
                                        No need to trawl through all of your bookmarks.
                                        </p>
                                        <button className='p-4 bg-[#5368df] rounded-lg text-white mt-8 hidden md:block cursor-pointer'>More Info</button>
                              </motion.div>
                         }

                         {
                              currentIndex == 2 &&
                              <motion.div
                              key="slide-2"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              >
                                        <h3 className='text-[#252b46] my-4 md:mt-0 md:mb-8 font-bold text-3xl md:text-4xl text-center md:text-left'> Share your bookmarks</h3>
                                        <p className='text-[#9194a1] text-center md:text-left'>Easily share your bookmarks and collections with others. Create a shareable 
                                        link that you can send at the click of a button.
                                        </p>
                                        <button className='p-4 bg-[#5368df] rounded-lg text-white mt-8 hidden md:block cursor-pointer'>More Info</button>
                              </motion.div>
                         }
                    </div>
               </div>
          
    </div>
  )
}

export default Carousel