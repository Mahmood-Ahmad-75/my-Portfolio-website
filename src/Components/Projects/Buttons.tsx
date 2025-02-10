import { Button } from 'antd';
import React from 'react'
 
interface getProps{
    func:(name:string)=>void;
    name:string
}
const Buttons:React.FC<getProps> = ({func, name}) => {
  return (
    <div
        data-aos="fade-up"
        className="w-full px-[80px] flex flex-wrap gap-8 justify-center"
      >
        <Button
          onClick={() => func("All")}
          className={`w-[80px] px-3 rounded-full text-[15px] ${
            name === "All"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          All
        </Button>

        <Button
          onClick={() => func("React")}
          className={`w-[150px] px-3 rounded-full text-[15px] ${
            name === "React"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          React.js
        </Button>
        <Button
          onClick={() => func("Redux")}
          className={`w-[150px] px-3 rounded-full text-[15px] ${
            name === "Redux"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          React/Redux
        </Button>
        <Button
          onClick={() => func("Next")}
          className={`w-[150px] px-3 rounded-full text-[15px] ${
            name === "Next"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          Next.js
        </Button>
      </div>
     
  )
}

export default Buttons