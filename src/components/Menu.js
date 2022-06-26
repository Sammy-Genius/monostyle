import { motion, AnimatePresence } from 'framer-motion';

const bgVariants = {
  from: {
    opacity:0,
    y:2000
  },
  to: {
      opacity:1,
      y:0,
      transition: { 
      duration: .7, 
      type: 'tween',
      when: 'beforeChildren',
      staggerChildren: .6
    }
  },
  exit: {
    opacity:0,
    y:2000,
    transition: {
      duration:1,
      type: 'tween',
      when: 'afterChildren',
      staggerChildren: .6
    }
  }
}


const clipVariants = {
    from: {
      clipPath: 'circle(0%)'
    },
    to: {
      clipPath: 'circle(100%)',
        transition: { 
        duration: .7, 
        type: 'tween',
        when: 'beforeChildren',
        staggerChildren: .6
      }
    },
    exit: {
      clipPath: 'circle(0%)',
      transition: {
        duration:.7,
        type: 'tween',
        when: 'afterChildren',
        staggerChildren: .6
      }
    }
  }

  const revealVariants = {
    from: {
      opacity:0,
      y:500,
      scale:0,
    },
    to: {
      opacity:1,
      y:0,
      scale:1,
      transition: {
        duration:.6,
        ease: [0.6, 0.01, -0.05, 0.9],
        when: 'beforeChildren',
        staggerChildren:.4
      }
    },
    exit: {
      opacity:0,
      y:500,
      transition: {
        duration:.6,
        ease: [0.6, 0.01, -0.05, 0.9],
        when: 'afterChildren',
        staggerChildren:.4
      }
    }
  }

const Menu = ( { menuIsOpen, openMenu } ) => {

    return ( 
        <>
        <AnimatePresence>
        { menuIsOpen && (
            <motion.div className='w-full h-full fixed top-0 left-0 bg-black/70 z-30'
            variants={ bgVariants }
            initial = 'from'
            animate = 'to'
            exit = 'exit'
            >
                <motion.div className='w-full h-full bg-black flex-box flex-col relative' variants={clipVariants}>
                  <motion.ul className='w-[70%] h-[80%] flex flex-col items-center justify-between z-10' variants={revealVariants}>
                    <li onClick={openMenu}><a className='uppercase font-monument text-white text-3xl lg:text-6xl hover:opacity-70' href="#home">Home</a></li>
                    <li onClick={openMenu}><a className='uppercase font-monument text-white text-3xl lg:text-6xl hover:opacity-70' href="#team">team</a></li>
                    <li onClick={openMenu}><a className='uppercase font-monument text-white text-3xl lg:text-6xl hover:opacity-70' href="#about">about</a></li>
                    <li onClick={openMenu}><a className='uppercase font-monument text-white text-3xl lg:text-6xl hover:opacity-70' href="#works">works</a></li>
                    <li onClick={openMenu}><a className='uppercase font-monument text-white text-3xl lg:text-6xl hover:opacity-70' href="#contact">let's talk</a></li>
                  </motion.ul>
                    <motion.div className='w-full h-full absolute top-0 left-0 flex items-end justify-end ' variants={revealVariants}>
                    <img className='w-[600px] h-[700px] black-and-white opacity-50 lg:hover:colored' src={require('../images/akua.png')} alt="" />
                  </motion.div>
                  <motion.span className='text-xl close-btn text-white font-monument absolute top-[5%] right-[5%] hover:opacity-70' onClick={openMenu} variants={clipVariants}>&times;</motion.span>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
        </>
     );
}
 
export default Menu;