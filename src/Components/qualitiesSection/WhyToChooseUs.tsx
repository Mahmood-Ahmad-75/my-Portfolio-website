import React from 'react'
import Boxes from './Boxes';
 
const WhyToChooseUs = () => {
    const arr:any[]=[{num:'15+',name:'Projects Shipped'}, {num:'3+',name:'Years of Experience'}, {num:'5+',name:'AI Integrations Built'}, {num:'3+',name:'DevOps Pipelines Deployed'}];
  return (
    <div data-aos="flip-up" className='bg-[--color-primary] w-full h-auto px-[80px] py-14 flex flex-col items-center'>
        <div className='md:w-[55%] w-full text-center'>
            <p className="text-white font-semibold text-[20px] tracking-[2px] leading-normal mb-4">MY MILESTONES</p>
            <h1 className="text-white font-bold text-[50px] leading-[50px] mb-5">
            Why work with a full-stack engineer who ships across mobile, web, backend, and AI?
            </h1>
        </div>
        <div data-aos="flip-up" className='mt-10 flex md:flex-row md:flex-wrap flex-col justify-center w-full gap-8'>
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