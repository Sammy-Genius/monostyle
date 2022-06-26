import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Team = () => {

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
              duration:1,
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
        <div className="w-full lg:mt-[250px] relative">
          <div className='w-full h-[120px] lg:h-[120px] overflow-hidden flex'>
            <div className='w-[50%] relative'>
              <h1 className='font-mont transparent-text font-black opacity-50 uppercase text-7xl lg:text-9xl text-black whitespace-nowrap overflow-hidden animation absolute left-[100%]'>It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it</h1>
            </div>
            <div className='w-[50%] relative'>
              <h1 className='font-mont transparent-text font-black opacity-50 uppercase text-7xl lg:text-9xl text-black whitespace-nowrap overflow-hidden animation absolute'>It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it + It's not about what you wear but how you wear it</h1>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:mt-[50px] lg:h-[1500px] clip-loader" id='team'>
            <div className='w-full relative block lg:none'>
              <h1 className='block lg:none monument text-7xl transparent-text text-center font-bold opacity-30'>Meet Our</h1>
              <motion.h1 className='block lg:none monument text-7xl text-black text-center font-bold mb-[40px] uppercase' ref={ref} animate={animation}>team</motion.h1>
            </div>
            <div className='w-full h-auto lg:w-[33.3%] lg:h-full flex justify-center items-center'>
              <div className='w-[90%] h-[500px] md:w-[80%] glass relative flex items-end justify-center'>
                <img className="w-full h-full md:w-[70%] lg:w-[90%]" src={require('../images/remove-3.png')} alt="" />
                <div className='absolute top-[40%] left-[-8%] w-[30%] h-auto rotate-[-90deg]'>
                  <h1 className='text-center font-tangerine text-[1.7rem] whitespace-nowrap'>Co-founder + Creative Director</h1>
                </div>
                <div className='absolute top-[2%] right-[3%] w-[30%] h-auto'>
                  <h1 className='text-center font-mont whitespace-nowrap text-[.8rem] font-bold'>Odisika Sam</h1>
                </div>
              </div>
            </div>
            <div className='w-full h-auto lg:w-[33.3%] lg:h-full flex flex-col items-center justify-between'>
              <div className='w-[90%] h-[500px] md:w-[80%] glass flex-box relative mt-[30px]'>
                <img className="w-full h-full md:w-[70%] lg:w-[90%]" src={require('../images/remove-6.png')} alt="" />
                <div className='absolute top-[25%] left-[-8%] w-[30%] h-auto rotate-[-90deg]'>
                  <h1 className='text-center font-tangerine text-[1.7rem] whitespace-nowrap'>Stylist + Fashion Curator</h1>
                </div>
                <div className='absolute top-[2%] right-0 w-[30%] h-auto'>
                  <h1 className='text-center font-mont whitespace-nowrap text-[.8rem] font-bold'>Emily</h1>
                </div>
              </div>
              <h1 className='mt-[70px] monument text-8xl transparent-text none lg:block text-center opacity-30'>Meet Our</h1>
              <motion.h1 className='monument text-8xl text-black none lg:block text-center uppercase' ref={refTwo} animate={animationTwo}>Team</motion.h1>
              <div className='w-[90%] h-[500px] md:w-[80%] glass flex items-end justify-end relative mt-[30px]'>
                <img className="w-[90%] h-full md:w-[70%] lg:w-[90%]" src={require('../images/akua.png')} alt="" />
                <div className='absolute top-[25%] left-[-8%] w-[30%] h-auto rotate-[-90deg]'>
                  <h1 className='text-center font-tangerine text-[1.7rem] whitespace-nowrap'>Co-founder + film maker</h1>
                </div>
                <div className='absolute top-[2%] right-0 w-[30%] h-auto'>
                  <h1 className='text-center font-mont whitespace-nowrap text-[.8rem] font-bold'>Kyle Akua</h1>
                </div>
              </div>
            </div>
            <div className='w-full h-auto lg:w-[33.3%] lg:h-full flex justify-center items-center mt-[30px] lg:mt-0'>
              <div className='w-[90%] h-[500px] md:w-[80%] glass relative flex items-end justify-end'>
                <img className="w-[90%] h-full md:w-[90%]" src={require('../images/remove-9.png')} alt="" />
                <div className='absolute top-[30%] left-[-8%] w-[30%] h-auto rotate-[-90deg]'>
                  <h1 className='text-center font-tangerine text-[1.7rem] whitespace-nowrap'>Photography + Production</h1>
                </div>
                <div className='absolute top-[2%] right-[5%] w-[30%] h-auto'>
                  <h1 className='text-center font-mont whitespace-nowrap text-[.8rem] font-bold'>Nana K & Ed</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default Team;