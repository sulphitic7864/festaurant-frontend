import React from 'react';
import { motion, useInView } from 'framer-motion';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const easeSmooth = [0.65, 0, 0.35, 1] as const;

const Newsletter = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="app__newsletter"
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: easeSmooth }}
    >
      <div className="app__newsletter-heading">
        <SubHeading title="Balita" />
        <h1 className="headtext__cormorant">Mag-subscribe sa Aming Newsletter</h1>
        <p className="p__opensans">Huwag palampasin ang pinakabagong mga update!</p>
      </div>
      <motion.div
        className="app__newsletter-input flex__center"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: easeSmooth, delay: 0.2 }}
      >
        <input type="email" placeholder="Ilagay ang iyong email address" />
        <button type="button" className="custom__button">Mag-subscribe</button>
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;