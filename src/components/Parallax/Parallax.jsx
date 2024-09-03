import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className='Parallax' ref={ref}
    style={{
      background:
        type === "TechStack"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)",
    }}>
      <motion.h1 style={{y:yBg}}>{ type === 'TechStack' ? 'What I know' : 'What I did'}</motion.h1>
      <div className="mountains"></div>
      
      <motion.div className="planets" style={{ y: yBg ,
        backgroundImage: `url(${type === 'TechStack' ? "/planets.png" : "/sun.png"})`
      }}></motion.div>
      <motion.div className="stars" style={{x:yText}}></motion.div>
    </div>
  )
}

export default Parallax
