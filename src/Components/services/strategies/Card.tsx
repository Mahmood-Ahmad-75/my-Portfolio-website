import Image from 'next/image';
import React from 'react'
interface getProp{
    func:(num:number)=>void;
    active:number;
    ind:number;
    img:any;
    heading:string;
    desc:string;
    name:string;
    profession:string;
    ratingValue:number;

}
 
const Card:React.FC<getProp> = ({func, active, ind, img, heading, desc,name, profession, ratingValue}) => {
    return (
    <div
    key={ind}
    onClick={() => func(ind)}
    className={`${
      active === ind ? "bg-[--color-primary]" : "bg-surface border border-gray-700"
    } cursor-pointer p-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col shrink-0 gap-2 md:w-[400px] w-full h-auto rounded-md`}
  >
    <Image
      className="w-[60px] mb-1"
      src={img}
      alt="strategy"
    />
    <h1
      className={`${
        active === ind ? "text-white" : "text-gray-200"
      } text-[22px] font-semibold leading-snug`}
    >
      {heading}
    </h1>
    <p
      className={`${
        active === ind ? "text-white" : "text-gray-400"
      } text-[16px] leading-[26px] font-light`}
    >
      {desc}
    </p>

  </div>
  )
}

export default Card