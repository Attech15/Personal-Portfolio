import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemvariants = {
  open: {
    y: 0,
    opacity:1,
  },
  closed: {
    y: 50,
    opacity:0,
  },
};

const Links = ({ onLinkClick }) => {
  const items = ["HomePage", "About", "TechStack", "Project","Contact"];
  return (
    <motion.div className="links" variants={variants} >
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}  onClick={onLinkClick}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
