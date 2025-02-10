 import { Rate } from 'antd';
import Image from 'next/image';
import React from 'react'
import { myPic } from '../../assets';
  
 
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
                active === ind ? "bg-[--color-primary]" : "bg-white border"
              } cursor-pointer  p-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col shrink-0 gap-5 items-center md:w-[300px]   w-full h-auto rounded-md`}
            >
              <Image
                className=" w-[100px] rounded-full  "
                src={img}
                alt="strategy"
              />
              <Rate disabled defaultValue={ratingValue} />

              <p
                className={`${
                  active === ind ? " text-white" : "text-black"
                } text-[16px] leading-[20px] text-left  font-light`}
              >
              {desc}
              </p>
              <h5
                className={`${
                  active === ind ? "text-white" : "text-black"
                } font-medium text-[16px]`}
              >
               {name}
              </h5>
              <p
                className={`${
                  active === ind ? "text-white" : "text-[grey]"
                } text-[16px]`}
              >
                {profession}
              </p>
            </div>
  )
}

export default Card