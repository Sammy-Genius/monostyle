import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Power4 } from 'gsap';
import Header from './Header';
import Main from './Main';
import Team from './Team';
import About from './About';
import Works from './Works';
import Menu from './Menu';
import Contact from './Contact';

function App() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  const imgOneRef = useRef(null),
        imgBoxRef = useRef(null),
        containerRef = useRef(null),
        loaderRef = useRef(null);

  useEffect(() => {

    const imgOne = imgOneRef.current,
          imgBox = imgBoxRef.current,
          container = containerRef.current,
          loader = loaderRef.current,
          tl = gsap.timeline({ defaults: { duration:1.2, ease: Power4.easeInOut }});

    setTimeout(()  => {
          tl.to(imgBox, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y:0 })
            .to(imgOne, { rotate: 360, scale:0 })
            .to(imgBox, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', y:0 })
            .to(container, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', x:0 })
            .to(loader, { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'})      
    },1200);
  }, []);

  return (
    <div className='w-screen h-screen relative'>
      <div className="w-full h-full relative" id='home'>
        <Header openMenu = { openMenu } />
        <Main/>
        <div className='w-full h-full absolute top-0 left-0 z-20 pointer-events-none'>
          <h1 className='text-2xl lg:text-6xl uppercase scale-[1.4] monument absolute top-0 left-[20%] md:left-[30%] transparent-text opacity-20'>gotta stay<br />fresh</h1>
        </div>
        <Team/>
        <About/>
        <Works/>
        <Contact/>
        <Menu menuIsOpen = { menuIsOpen } openMenu = { openMenu } />
      </div>

      {/* THIS IS THE SCREEN PRELOADER*/} 
      <div className='w-full h-full bg-black flex-box fixed top-0 left-0 clip-loader z-20 pointer-events-none' ref={loaderRef}>
        <div className="w-auto h-500 flex-box flex-col relative">
          <div className='h-full flex-box clip-container translate-x-20' ref={containerRef}>
            <h1 className="monument text-4xl uppercase md:text-6xl lg:text-9xl blend text-white transparent-text z-10">monostyle</h1>
            <div className=" w-170 h-170 md:w-300 md:h-300 gradient rounded-full absolute"></div>
            <h2 className='monument text-white absolute bottom-[40%] right-[0%] blend md:bottom-40 md:right-2'>FASHION<sup>&#174;</sup></h2>
          </div>
          <div className='w-300 h-300 md:w-400 md:h-400 absolute flex-box z-10 flex-col clip-img translate-y-20' ref={imgBoxRef}>
            <img className="w-full h-full absolute" src={require("../images/image-1.jpg")} alt="" ref={imgOneRef}/>
            <img className="w-full h-full" src={require("../images/image-2.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
