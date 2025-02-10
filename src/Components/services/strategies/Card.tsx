import Image from 'next/image';
import React from 'react'
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
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
    } cursor-pointer  p-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col shrink-0 gap-5  md:w-[400px]   w-full h-[400px] rounded-md`}
  >
    <Image
      className=" w-[100px]  "
      src={ img}
      alt="strategy"
    />
    <h1
      className={`${
        active === ind ? "text-white" : "text-black"
      } text-[25px]  font-semibold  h-[100px] overflow-hidden`}
    >
    {heading}
    </h1>
    <p
      className={`${
        active === ind ? "text-white" : "text-black"
      } text-[18px] leading-[28px] h-[100px] overflow-hidden font-light `}
    >
    {desc}
    </p>
    <Button
      type="link"
      className={`${
        active === ind ? " text-white" : "text-[--color-primary] "
      } gap-2  flex pl-0 `}
    >
      Learn more 
      <FontAwesomeIcon icon={faArrowRightLong} />

    </Button>
  </div>
  )
}

export default Card