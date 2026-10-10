import React from 'react';
import { motion, useInView } from 'framer-motion';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const easeSmooth = [0.65, 0, 0.35, 1] as const;

const chefContentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const chefItemVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: easeSmooth } },
};

const Chef = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="app__bg app__wrapper section__padding">
      <motion.div
        className="app__wrapper_img app__wrapper_img-reverse"
        initial={{ opacity: 0, x: -64 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, ease: easeSmooth }}
      >
        <img src={images.chef} alt="chef_image" />
      </motion.div>
      <motion.div
        className="app__wrapper_info"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={chefContentVariants}
      >
        <motion.div variants={chefItemVariants}>
          <SubHeading title="Mensahe ng Chef" />
        </motion.div>
        <motion.h1 className="headtext__cormorant" variants={chefItemVariants}>
          Ang Aming Pinaniniwalaan
        </motion.h1>

        <motion.div className="app__chef-content" variants={chefContentVariants}>
          <motion.div className="app__chef-content_quote" variants={chefItemVariants}>
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">
              Naniniwala kami na ang tunay na lasa ay nagmumula sa puso - 
              bawat putahe ay may kwento, bawat sangkap ay may pinanggalingan.
            </p>
          </motion.div>
          <motion.p className="p__opensans" variants={chefItemVariants}>
            Sa Bagong Lasa, hindi lang pagkain ang aming inihahain - kundi isang karanasang 
            nag-uugnay sa tradisyon at inobasyon. Mula sa aming kusina, na may pagmamahal at 
            dedikasyon, dinadala namin sa inyo ang mga lasa ng nakaraan na muling binigyang-buhay 
            para sa kasalukuyan.
          </motion.p>
        </motion.div>

        <motion.div className="app__chef-sign" variants={chefItemVariants}>
          <p>Kevin Luo</p>
          <p className="p__opensans">Punong Chef at Tagapagtatag</p>
          <img src={images.sign} alt="sign_image" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Chef;