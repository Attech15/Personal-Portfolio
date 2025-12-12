import "./hero.scss";
import { Typewriter } from "react-simple-typewriter";
import { motion , useInView} from "framer-motion";
import { useRef } from "react";


const sliderVariants = {
  initial: {
    x:0,
  },
  animate: {
    x: "-300%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const variants = {
  initial:{
    opacity: 0, scale: 0.5,
  },
  animate:{
    opacity: 1, 
    scale: 1,
    transition:{
      duration:0.5,
    },
  },
};


function Hero() {

  const ref = useRef();
  const isInView = useInView(ref, {margin: "-50px", triggerOnce: true });

  return (
    <motion.div className="hero" >
      <div className="wrapper">
        <motion.div className="titleContainer" variants={textVariants} initial="initial" ref={ref}   animate={ window.innerWidth <= 1440 ? "animate" : isInView && "animate"}>
          <motion.h2 variants={textVariants}>Akash Mathur</motion.h2>
          <motion.h1 variants={textVariants}>
            I am Passionate
          </motion.h1>
          <motion.h1 className="typing" variants={textVariants}>
          
            <Typewriter
              words={[
                "Frontend Developer",
                "Javascript Developer",
                "React Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1TwmszY-N-yAA1IIFoerIIGmz6DEjd0l0/view?usp=drivesdk"
              );
            }}>Download Resume</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="slidingContainer" variants={sliderVariants} initial="initial" animate="animate">
        Frontend Javascript React Developer
      </motion.div>
      <motion.div className="imageContainer" variants={variants} initial="initial" whileInView="animate"  viewport={{ once: true }}>
        <img src="/developer.png" alt="" />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
