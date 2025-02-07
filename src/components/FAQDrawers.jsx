import React, {useState} from 'react'

function FAQDrawers(props) {

     const [isOpen, setIsOpen] = useState(false);
    

     function toggleMenu(){
          setIsOpen(!isOpen) 
     }



  return (
    <div>
          <div className='border-t border-[#9194a1]'>
          <button onClick={toggleMenu} className='w-full slide-down' >
          <div className='flex justify-between items-center py-4 hover:cursor-pointer'>
               <h4 className='text-[#252b46] hover:text-[#fa5757] font-semibold'>{props.question}</h4>
               
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={isOpen ? "#fa5757" :"#5267DF" } stroke-width="3" d={isOpen ? 'M1 9l8-8 8 8' : 'M1 1l8 8 8-8'}/></svg>
               
          </div>
          </button>
          {isOpen && <p className='text-[#9194a1] mb-4'>{props.answer}</p>}
          </div>

    </div>
  )
}

export default FAQDrawers