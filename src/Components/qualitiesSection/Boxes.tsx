import React from "react";
interface getProp{
  num:string;
  name:string
}
const Boxes:React.FC<getProp> = ({num, name}) => {
  return (
    <div className="bg-white text-center flex flex-col shrink-0  justify-center items-center   md:w-[250px] w-full rounded-md  h-[180px]">
      <h1 className="text-[--color-secondary] font-bold leading-[50px] text-[60px] mb-3">
       {num}
      </h1>
      <p className="text-[--color-secondary] font-semibold text-[20px] leading-normal mb-5">
       {name}
      </p>
    </div>
  );
};

export default Boxes;
