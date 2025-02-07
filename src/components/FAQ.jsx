import React from 'react'
import FAQDrawers from './FAQDrawers'

function FAQ() {
  return (
     <section id='faq' className='px-4 md:px-0 py-20'>
          <div className='container mx-auto'>
               <div className='md:w-1/2 mx-auto'>
                    <h3 className='text-[#252b46] text-center font-bold mb-4 md:mb-8 text-3xl'>Frequently Asked Questions</h3>
                    <p className='text-center text-[#9194a1] mb-10 md:mb-8 text-lg'> Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.
                    </p>
                    <FAQDrawers question= "What is Bookmark?" 
                    answer= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
                    />
                    <FAQDrawers question= "How can I request a new browser?"
                    answer="  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                              Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                              ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                              Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
                    />
                    <FAQDrawers question= "Is there a mobile app?"
                    answer="  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                              urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                              sollicitudin ex et ultricies bibendum."
                    />
                    <FAQDrawers question = "What about other Chromium browsers?"
                    answer = " Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
                    />
                    <div className='flex justify-center'>
                         <button className='bg-[#5368df] text-white py-4 px-6 my-10 rounded-lg cursor-pointer'>More Info</button>
                    </div>
               </div>
          </div>
     </section>
  )
}

export default FAQ