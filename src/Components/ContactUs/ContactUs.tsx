import React from 'react'
import ContactUsHeading from './ContactUsHeading'
import ContactInfo from './ContactInfo'
import ConsultForm from './ConsultForm'
import Footer from '../footer/Footer'

const ContactUs = () => {
  return (
    <div className='w-full h-auto bg-black pb-16'>
        {/* heading */}
        <ContactUsHeading/>
        <div className='flex md:flex-row w-full flex-col gap-5 justify-center mb-16 mt-10 px-6 md:px-16'>
            <ContactInfo/>
            <ConsultForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs