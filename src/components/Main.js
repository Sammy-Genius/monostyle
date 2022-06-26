import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Power2 } from 'gsap';

const Main = () => {

  const imgBox = useRef(null),
        coverImg = useRef(null),
        tl = gsap.timeline({defaults:{ duration:1.2, ease:Power2.easeInOut}});

       useEffect(() => {
          setTimeout(() => {
              tl.to(imgBox.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', x:0}, "-=.3")
              .to(coverImg.current, { scale:1})
          }, 7000);
        })
        
    return ( 
        <div className='w-full overflow-hidden'>
          <main className='w-[90%] my-[70px] mx-auto lg:mt-[60px] lg:h-[500px] flex items-center flex-col-reverse lg:flex-col lg:relative'>
            <div className='lg:w-[50%] lg:h-[300px] mt-[10px] lg:mt[0px] self-start lg:self-auto flex flex-col lg:absolute lg:top-[30%] lg:left-[10%] z-10'>
              <h1 className='font-mont text-4xl lg:text-8xl uppercase font-black whitespace-nowrap'>Your Loo<span className="lg:transparent-text">ks?</span></h1>
              <h1 className='font-mont text-3xl lg:text-8xl uppercase lg:mt-[20px] font-black whitespace-nowrap'>Our <span className="transparent-text">Passion</span></h1>
            </div>
            <div className='w-full lg:w-[auto]'>
              <div className='w-full h-[400px] lg:w-[450px] lg:h-[500px] lg:absolute lg:rotate-[3deg] lg:opacity-90 clip-container translate-x-20' ref = { imgBox }>
                <img className='w-full h-full scale-[1.2]' src={require('../images/image-4.jpg')} alt="" ref={coverImg} />
              </div>
            </div>
          </main>
        </div>
     );
}
 
export default Main;