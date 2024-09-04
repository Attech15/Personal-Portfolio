
import { useRef, useEffect, useState } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const textVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const parentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Apply staggerChildren here
    },
  },
};
const variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Boxvariants = {
  initial: {
    x: -120,
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


const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-50px", triggerOnce: true });


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const appliedVariants = windowWidth <= 700 ? Boxvariants : variants;

  return (
    <div
      className="About"
    >
      <motion.h2 ref={ref} variants={appliedVariants} initial="initial" animate={isInView && "animate"}>
        About Me
      </motion.h2>
      <div className="cardContainer">
        <div className="textContainer">
          <div className="profile">
            <div className="loader">
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
              <div className="loader-square"></div>
            </div>
          </div>
          <motion.div
            className="bio"
            ref={ref}
            initial="initial"
            animate={ isInView && "animate"}
            variants={appliedVariants}
          >
            <motion.p variants={appliedVariants}>
              Hello,I'm Akash Mathur, a dedicated React.js developer with a
              comprehensive skill set in frontend development. I specialize in
              creating engaging user interfaces using React.js and Next.js, with
              proficiency in JavaScript, TypeScript, HTML, CSS, and SASS.
            </motion.p>
            <motion.p variants={appliedVariants}>
            I also have strong skills in DSA, OOP, DBMS, C, and Core Java, enabling me to build robust and scalable solutions.
            </motion.p>
            <motion.p variants={appliedVariants}>
              I thrive on learning and diving deep into new technologies. I'm
              excited to tackle challenges and continuously expand my expertise.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="imageContainer"
          ref={ref}
          variants={variants}
          initial="initial"
          animate={ isInView && "animate"}
        >
          <img src="/dev.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
