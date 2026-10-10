import React from 'react';
import { motion, useInView } from 'framer-motion';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const easeSmooth = [0.65, 0, 0.35, 1] as const;

const FindUs = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="app__bg app__wrapper section__padding" id="contact">
      <motion.div
        className="app__wrapper_info"
        initial={{ opacity: 0, x: -48 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: easeSmooth }}
      >
        <SubHeading title="Makipag-ugnayan" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Hanapin Kami</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Unit 108, The Podium Tower, ADB Avenue corner Ortigas Jr. Road, 
            Mandaluyong City, Metro Manila, 1550
          </p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>
            Oras ng Operasyon
          </p>
          <p className="p__opensans">Lunes - Biyernes: 10:00 AM - 2:00 AM</p>
          <p className="p__opensans">Sabado - Linggo: 10:00 AM - 3:00 AM</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>
          Bisitahin Kami
        </button>
      </motion.div>

      <motion.div
        className="app__wrapper_img"
        initial={{ opacity: 0, x: 48 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: easeSmooth, delay: 0.12 }}
      >
        <img src={images.findus} alt="findus_img" />
      </motion.div>
    </div>
  );
};

export default FindUs;