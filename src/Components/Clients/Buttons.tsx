 
import { Button } from "antd";
import { cards } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

interface getProps {
  func: (name: number) => void;
  active: number;
}
const Buttons: React.FC<getProps> = ({ func, active }) => {
  const btnStyles: string =
    "border-grey-700 text-[--color-primary]  border-[--color-primary] flex items-center justify-center focus:bg-[--color-primary] focus:text-white hover:bg-[--color-primary] hover:!text-white   w-[50px] h-[50px]";
  return (
    <div className="w-full flex gap-5   justify-center mt-8 mb-8 px-[50px]">
      <Button
        disabled={active === 0}
        onClick={() => func(1)}
        className={btnStyles}
        shape="circle"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </Button>
      <Button
        autoFocus
        disabled={cards.length === active + 1}
        onClick={() => func(0)}
        className={btnStyles}
        shape="circle"
      >
      <FontAwesomeIcon icon={faArrowRightLong} />
      </Button>
    </div>
  );
};

export default Buttons;
