import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

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

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span variants={variants} initial="initial" animate="animate" >Akash</motion.span>
        <motion.div className="social" variants={variants} initial="initial" animate="animate" >
          <a href="https://www.instagram.com/akashmathur541?igsh=bXl4OThucGQ0cm8y">
            <img src="/instagram.png" alt="" title="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/akash-mathur-a126b323b">
            <img src="/linkedin.png" alt=""  title="linkdin"/>
          </a>
          <a href="https://github.com/Attech15">
            <img src="/github.png"  alt=""  title="github"/>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
