import './project.scss';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
      id: 1,
      title: "Weather App",
      img: "/weatherapp.png",
      desc: "This Weather App, developed using HTML, CSS, and JavaScript, provides real-time temperature data for any city. Users can input a city name, and the app dynamically fetches and displays the current temperature. The app features a clean and intuitive interface, making it easy to use for anyone needing quick and accurate weather updates. Its dynamic nature ensures that users receive the most current information, enhancing the overall user experience"
    },
    // {
    //   id: 2,
    //   title: "Weather App",
    //   img: "/weatherapp.png",
    //   desc: "This Weather App, developed using HTML, CSS, and JavaScript, provides real-time temperature data for any city. Users can input a city name, and the app dynamically fetches and displays the current temperature. The app features a clean and intuitive interface, making it easy to use for anyone needing quick and accurate weather updates. Its dynamic nature ensures that users receive the most current information, enhancing the overall user experience"
    // },
  ];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start" , "end end"],
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-565, 300]);
  
    return (
      <section style={{background:"#111132"}}>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button onClick={() => {
            window.open("https://github.com/Attech15/Weather-App");
          }}>See Code</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };


function Project() {
    const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className='project' ref={ref}>
      <div className="progress">
        <h1>featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Project
