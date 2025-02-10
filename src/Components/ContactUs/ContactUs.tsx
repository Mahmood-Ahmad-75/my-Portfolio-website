import React from 'react'
import ContactUsHeading from './ContactUsHeading'
import ContactInfo from './ContactInfo'
import ConsultForm from './ConsultForm'
import Footer from '../footer/Footer'

const ContactUs = () => {
  return (
    <div   className='w-full h-auto p-5 bg-[--color-primary] '>
        {/* heading */}
        <ContactUsHeading/>
        <div className='flex md:flex-row w-full flex-col gap-5  justify-center md:mb-[150px] mb-[80px]  mt-[50px]'>
            <ContactInfo/>
            <ConsultForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs