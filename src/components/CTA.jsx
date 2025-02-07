import React from 'react'

function CTA() {

  function handleSubmit(e){
    e.preventDefault()
    document.getElementById('email-address').value = ""
  }

  return (
    <section className='px-4 md:px-0 py-20 bg-[#5368df]' id='cta'>
          <div className='container mx-auto flex flex-col items-center'>
                    <p className='text-center text-white uppercase tracking-[0.3em]'>35,000+ already joined</p>
                    <h3 className='text-2xl md:w-1/4 text-white font-bold text-center my-4'>Stay up-to-date with what we’re doing</h3>

                    <form action="" onSubmit={handleSubmit} className='w-full md:w-1/2'>
                        <div className='flex flex-col md:flex-row gap-4'>
                              <input id='email-address' type="email" placeholder='Enter your email address' className='bg-white p-4 rounded-lg w-full md:w-3/4'/>
                              <button className='bg-[#fa5757] text-white p-4 rounded-lg w-full md:w-1/4 cursor-pointer'>Contact Us</button>
                        </div>
                    </form>
          </div>
    </section>
  )
}

export default CTA