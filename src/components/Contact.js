import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const Contact = () => {

    const  [ ref, inView ]  = useInView();
    const animation = useAnimation();

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

    return ( 
        <div className="w-full mt-150px lg:mt-[300px]" id='contact'>
            <div className="w-[90%] lg:w-[70%] my-0 mx-auto">
                <motion.div ref={ref} animate={animation}>
                    <h1 className='text-black text-center font-bold monument text-5xl lg:text-8xl uppercase'>What's your budegt? <br /> <span className="text-3xl lg:text-5xl lowercase">let's talk</span></h1>
                </motion.div>
                <h2 className='text-black text-center font-bold font-mont text-2xl lg:text-6xl mt-[20px] underline lg:hover:opacity-70'><a href="">monostyle@gmail.com</a></h2>
                <div className="w-full h-[100px] mt-[20px] flex justify-center">
                    <h2 className="font-bold font-mont text-xl lg:text-3xl mx-[15px] underline lg:hover:opacity-70"><a href="">Twitter</a></h2>
                    <h2 className="font-bold font-mont text-xl lg:text-3xl underline lg:hover:opacity-70"><a href="">Instagram</a></h2>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;