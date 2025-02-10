import React from 'react'
import Boxes from './Boxes';
 
const WhyToChooseUs = () => {
    const arr:any[]=[{num:'20+',name:'Satified Clients'}, {num:'50+',name:'Impressions'}];
  return (
    <div data-aos="flip-up" className='bg-[--color-primary] w-full   h-auto px-[80px] py-[100px] flex flex-col items-center'>
        <div className='md:w-[55%] w-full text-center '>
            <p className="text-white font-semibold text-[20px] tracking-[2px] leading-normal mb-4">OUR MILESTONE</p>
            <h1 className="text-white font-bold text-[50px] leading-[50px] mb-5">
            What sets our studio apart for your projects?
            </h1>
        </div>
        <div data-aos="flip-up" className='mt-[100px] flex md:flex-row md:flex-wrap flex-col justify-center w-full   gap-8 '>
        {
            arr.map((d,ind)=>{
                return <Boxes key={ind} num={d.num} name={d.name}/>
            })
        }
        </div>
        

    </div>
  )
}

export default WhyToChooseUs