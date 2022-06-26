import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Works = () => {

  const  [ ref, inView ]  = useInView();
  const animation = useAnimation();

  const  [ refTwo, inViewTwo ]  = useInView();
  const animationTwo = useAnimation();

  useEffect(() => {

    if(inView) {
      animation.start({
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
          type: 'tween',
          duration:1
        }
      })
    }
    else {
      animation.start({
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
      })
    }
  }, [inView]);

  useEffect(() => {

    if(inViewTwo) {
      animationTwo.start({
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
          type: 'tween',
          duration:1
        }
      })
    }
    else {
      animationTwo.start({
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
      })
    }
  }, [inViewTwo]);

    return ( 
        <div className='w-full mt-[150px] lg:mt-[300px]' id='works'>
          <motion.h1 className='text-black font-bold font-monument text-5xl lg:text-8xl uppercase w-[90%] lg:w-[80%] my-0 mx-auto' ref={ref} animate={animation}>our <br /> selected <br />works </motion.h1>
          <div className='w-[90%] lg:w-[80%] lg:h-[1300px] my-[50px] mx-auto flex flex-col lg:flex-row'>
            <div className="w-full lg:w-[33.3%] lg:h-full lg:flex flex-col justify-between">
              <img className="w-full h-[400px] lg:h-[600px] fill lg:fit black-and-white" src={require('../images/style.jpg')} alt=""/>
              <img className="w-full h-[400px] lg:h-[600px] mt-[30px] lg:mt-0 fill lg:fit" src={require('../images/image-5.jpg')} alt="" />
            </div>
            <div className="w-full lg:w-[33.3%] h-full"></div>
            <div className="w-full lg:w-[33.3%] lg:h-full flex flex-row-reverse lg:items-start lg:justify-evenly lg:flex-col">
              <motion.h1 className='w-full none lg:block text-black font-bold font-monument text-xl lg:text-7xl uppercase' ref={refTwo} animate={animationTwo}>see in <br /> black <br /> and <br /> white </motion.h1>
              <img className="w-full h-[400px] lg:h-[600px] fill lg:fit mt-[30px] lg:mt-0" src={require('../images/image-8.jpg')} alt="" />
            </div>
          </div>
        </div>
     );
}
 
export default Works;