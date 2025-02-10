 
import { Button } from "antd";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
 
interface cProp {
    active:number
    func: (num: number)=> void
  };
  const Buttons:React.FC<cProp> = ({func,active})=>{
     const handleClick = (e: number) =>{
      func(e);
           console.log('clicked', e);
     }
    const btnStyles: string =    "border-grey-700 text-[--color-primary]  border-[--color-primary] flex items-center justify-center focus:bg-[--color-primary] focus:text-white hover:!bg-[--color-primary] hover:!text-white   w-[50px] h-[50px]";  
  
    return(
      <div className="w-full flex gap-5 md:justify-end justify-center mt-8 mb-8 px-[50px]">
      <Button
        disabled={active === 0}
        onClick={()=>
          handleClick(1)
          }
        className={btnStyles}
        shape="circle"
      >
      <FontAwesomeIcon icon={faArrowLeftLong} />
      </Button>
      <Button
        autoFocus
        disabled={active === 3}
        onClick={() => handleClick(0)}
        className={btnStyles}
        shape="circle"
      >   
    <FontAwesomeIcon icon={faArrowRightLong} />

      </Button>
    </div>
    )
  }
  export default Buttons