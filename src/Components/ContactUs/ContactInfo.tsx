import React from 'react'

const ContactInfo = () => {
  return (
    <div className='bg-surface md:w-[540px] w-full md:h-auto h-auto  rounded-xl p-[30px]'>
      <p className='text-[24px] text-[--color-secondary] font-bold leading-[20px ]'>Contact Info</p>
      <h3 className='text-[24px] text-[--color-secondary] font-bold leading-[30px] mb-4'>( +92) 3248433826</h3>
      <div className='flex gap-2 mt-2'>
        <h5 className='text-[16px] font-semibold text-[--color-secondary] '>Address: {" "}</h5>
        <p className='text-[--color-secondary] text-[16px] text-light'>Lahore, Pakistan</p>
      </div>
      <div className='flex gap-2 '>
        <h5 className='text-[16px] font-semibold text-[--color-secondary]'>Email: {" "}</h5>
        <p className='text-[--color-secondary] text-[16px] text-light'>mahmoodraj75@gmail.com</p>
      </div>
      <div className='flex  gap-2'>
        <h5 className='text-[16px] font-semibold text-[--color-secondary]'>Cell: {" "}</h5>
        <p className='text-[--color-secondary] text-[16px] text-light'>(+92){" "}3248433826</p>
      </div>
      <div className='flex  gap-2 '>
        <h5 className='text-[16px] font-semibold text-[--color-secondary]'>LinkedIn: {" "}</h5>
        <a href='https://www.linkedin.com/in/mahmood-ahmad-59a6b1223/' target='_blank' className='text-[--color-primary] text-[16px] text-light hover:underline'>mahmood-ahmad-59a6b1223</a>
      </div>
      <div className='flex  gap-2 '>
        <h5 className='text-[16px] font-semibold text-[--color-secondary]'>GitHub: {" "}</h5>
        <a href='https://github.com/Mahmood-Ahmad-75' target='_blank' className='text-[--color-primary] text-[16px] text-light hover:underline'>Mahmood-Ahmad-75</a>
      </div>
    </div>
  )
}

export default ContactInfo