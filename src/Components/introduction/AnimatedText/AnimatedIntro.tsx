import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./animated.scss";
import { Button } from "antd";
import {nextArrow as ArrowDownwardIcon} from '@/assets';
const AnimatedIntro = () => {
  const words = ['Web Developer.', 'Web Designer.', 'Frontend Developer.', 'MERN Stack Developer.', 'Application Developer.'];
  let i = 0;
  let offset = 0;
  const len = words.length;
  let forwards = true;
  let skip_count = 0;
  const skip_delay = 25;
  const speed = 130;

  const wordflick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      const part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      gsap.to(".animated-text", { textContent: part, duration: 0.1 });




    }, speed);
  };
  const buttonAnimation = () => {

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(".btnAnimation", { y: 50, duration: 1, ease: "power1.inOut" })



  }

  const handleClick = () => {
    let container: any = document.getElementById('about');
    container.scrollIntoView({ behavior: 'smooth' });
  }


  useEffect(() => {
    wordflick();
    buttonAnimation();
  }, []);

  return (
    <main className="container flex flex-col">
      <p className="text-[--color-primary] text-[20px] font-bold">HEY! I AM</p>
      <h1 className="text-black text-[70px] font-bold">Mahmood Ahmad</h1>
      <div className="flex gap-1">
        <h2 className="text-black font-bold text-[35px]">I&apos;m a</h2>
        <div className="animated-text text-[--color-primary] font-bold text-[35px] underline"></div><p className="self-start">|</p>
      </div>
      <div className="w-[50px] h-[100px]  flex justify-center items-center">
        <Button onClick={handleClick} type='link' shape='circle' className='btnAnimation '>
          {/* <ArrowDownwardIcon /> */}
          </Button>

      </div>
    </main>
  );
};

export default AnimatedIntro;
