import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
      staggerChildren: 0.1,
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


const Contact = () => {
  const refInfo = useRef();
  const refForm = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [Success, setSuccess] = useState(false);

  const isInView = useInView(refInfo, { margin: "-20px", triggerOnce: true });
  const isInViewForm = useInView(refForm, { margin: "-20px", triggerOnce: true });
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gbg28m8", "template_u18cs3d", formRef.current, "T1HVQemi7kciGbrra")
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div className="Contact">
      <div className="contactContainer">
        <motion.div
          className="contactInfo"
          ref={refInfo}
          variants={Boxvariants}
          initial="initial"
          animate={isInView && "animate"}
        >
          <motion.h2>Get In Touch</motion.h2>
          <motion.p >
            I’m currently searching for opportunities for a React developer
            role.<br />If there is any vacancy my inbox is always open.
            Whether<br />
            you have any further questions or just want to say hi,<br />
            I’ll try my best to get back to you!
          </motion.p>
          <motion.button onClick={() => {
            window.open("https://www.linkedin.com/in/akash-mathur-a126b323b");
          }}>Say Hello</motion.button>
        </motion.div>
        <motion.div className="contactForm" ref={refForm}
          variants={variants}
          initial="initial"
          animate={isInViewForm && "animate"}>
          <motion.form ref={formRef} onSubmit={sendEmail}>
            <motion.input type="text" name="name" placeholder="Your Name" minLength="3" maxLength="20" required autoComplete="true"/>
            <motion.input
              type="email"
              name="email"
              minLength="3" 
              maxLength="40"
              placeholder="Your Email"
              required
              autoComplete="true"
            />
            <motion.textarea
              rows={8}
              name="message"
              minLength="3" 
              maxLength="100"
              placeholder="Your Message..."
              required
              autoComplete="true"
            />
            <motion.div className="btn">
              <motion.button type="submit">Submit</motion.button>
              <motion.button type="reset">Clear</motion.button>
              {error && "Error"}
              {Success && "Success"}
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
