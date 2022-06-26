import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {

  const  [ ref, inView ]  = useInView();
  const animation = useAnimation();

  const  [ refTwo, inViewTwo ]  = useInView();
  const animationTwo = useAnimation();

  const  [ refThree, inViewThree ]  = useInView();
  const animationThree = useAnimation();

  const  [ refFour, inViewFour ]  = useInView();
  const animationFour = useAnimation();

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

  useEffect(() => {

    if(inViewThree) {
      animationThree.start({
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
          type: 'tween',
          duration:1
        }
      })
    }
    else {
      animationThree.start({
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
      })
    }
  }, [inViewThree]);


  useEffect(() => {

    if(inViewFour) {
      animationFour.start({
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
          type: 'tween',
          duration:1,
          staggerChildren: 0.5
        }
      })
    }
    else {
      animationFour.start({
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
      })
    }
  }, [inViewFour]);

    return ( 
        <div className="w-full mt-[150px] lg:mt-[300px] flex flex-col items-center"id='about'>
          <div className='w-[90%] lg:w-[60%]'>
            <motion.div ref={ref} animate={animation}>
              <h1 className='text-black font-bold font-monument text-5xl lg:text-8xl uppercase'>a different</h1>
              <h1 className='text-black font-bold font-monument text-5xl lg:text-8xl uppercase'>kind of</h1>
              <h1 className='text-black font-bold font-monument text-5xl lg:text-8xl uppercase'>fashion studio</h1>
            </motion.div>
            <img className="w-[90%] lg:w-[700px] h-[400px] fit mt-[30px]" src={require('../images/studio.jpg')} alt=""/>
            <motion.div ref={refTwo} animate={animationTwo}>
              <h1 className='text-black font-bold font-monument text-5xl lg:text-8xl uppercase mt-[30px]'>based in</h1>
              <h1 className='text-black font-bold font-monument text-5xl lg:text-8xl uppercase'>airport city <br /> accra</h1>
            </motion.div>
            <div className='w-full mt-[100px] flex flex-col lg:flex-row'>
              <div className='w-full lg:w-[50%]'>
                <motion.div className="w-full lg:w-[45%]" ref={refThree} animate={animationThree}>
                  <p className='font-mont font-bold text-xl'>A fashion house and creative agency</p>
                </motion.div>
              </div>
              <div className='w-full mt-[30px] lg:mt-0 lg:w-[50%] flex justify-end'>
                <div className="w-full lg:w-[75%]">
                  <motion.div ref={refFour} animate={animationFour}>
                  <p className='font-mont font-bold leading-[30px] text-xl'>Hi welcome to Monostyle!</p>
                  <p className='font-mont font-bold leading-[30px] text-xl mt-[20px]'>We are group of young people who are not only passionate about fashion, but also have an affinity for elegant things.</p>
                  <p className='font-mont font-bold leading-[30px] text-xl mt-[20px]'>We started the Monostyle brand to represent equal creativity clothing for both men and women. Pushing the envelope. Adding modern silhouettes and unique cuts to every design. Designs that are buildable and can be mixed and matched.</p>
                  <p className='font-mont font-bold leading-[30px] text-xl mt-[20px]'>Our vison is to create a variety of confident, classy, and cool clothing for all. One drop at a time.</p>
                  </motion.div>
                  <img className="w-full lg:w-[400px] h-[500px] fit mt-[30px]" src={require('../images/team.jpg')} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default About;