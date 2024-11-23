import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../assets/css/kickstart.css"

const Step = ({ number, title, description, isLeftAligned }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeftAligned ? -100 : 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`step-container ${isLeftAligned ? 'left' : 'right'}`}
      >
        <div className="step-number">{number}</div>
        <div className="step-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </motion.div>
    );
  };
  
  export default Step;