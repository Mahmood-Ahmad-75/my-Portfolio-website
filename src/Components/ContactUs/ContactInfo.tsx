import React from 'react'

const ContactInfo = () => {
  return (
    <div className='bg-white md:w-[540px] w-full md:h-[280px] h-auto  rounded-xl p-[30px]'>
      <p className='text-[24px] text-[--color-secondary] font-bold leading-[20px ]'>HelpLine</p>
      <h3 className='text-[24px] text-[--color-secondary] font-bold leading-[30px]'>( +92) 3248433826</h3>
      <div className='flex gap-2 mt-[40px]'>
        <h5 className='text-[16px] font-semibold text-[--color-secondary] '>Address: {" "}</h5>
        <p className='text-[--color-secondary] text-[16px] text-light'>Main Raiwind Road, Lahore, Pakistan</p>
      </div>
      <div className='flex gap-2 '>
        <h5 className='text-[16px] font-semibold text-[--color-secondary]'>Email: {" "}</h5>
        <p className='text-[--color-secondary] text-[16px] text-light'>mahmoodahmad75@gmail.com</p>
      </div>
      <div className='flex  gap-2'>
        <h5 className='text-[16px] font-semibold text-[--color-secondary]'>Cell: {" "}</h5>
        <p className='text-[--color-secondary] text-[16px] text-light'>(+92){" "}3248433826</p>
      </div>
      <div className='flex  gap-2 '>
        <h5 className='text-[16px] font-semibold text-[--color-secondary]'>Work Hour: {" "}</h5>
        <p className='text-[--color-secondary] text-[16px] text-light'>Mon - Sat: 9:00 - 18:00</p>
      </div>
    </div>
  )
}

export default ContactInfo