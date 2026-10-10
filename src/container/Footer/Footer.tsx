import React from "react";
import { motion, useInView } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const easeSmooth = [0.65, 0, 0.35, 1] as const;

const Footer = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <motion.div
          className="app__footer-links_contact"
          initial={{ opacity: 0, x: -56 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
        >
          <h1 className="app__footer-headtext">Makipag-ugnayan</h1>
          <p className="p__opensans">
            Unit 108, The Podium Tower, ADB Avenue corner Ortigas Jr. Road, 
            Mandaluyong City, Metro Manila, 1550
          </p>
          <p className="p__opensans">(02) 1234 5678</p>
          <p className="p__opensans">0123 456 7890</p>
          <p className="p__opensans" style={{ color: '#DCCA87', marginTop: '0.5rem' }}>
            info@bagonglasa.com
          </p>
        </motion.div>

        <motion.div
          className="app__footer-links_logo"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.25 }}
        >
          <img src={images.bagonglasa} alt="footer_logo" />
          <p className="p__opensans">
            "Ang tunay na lasa ay nagmumula sa puso - 
            bawat putahe ay may kwento, bawat subo ay may alaala."
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
            alt="spoon"
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </motion.div>

        <motion.div
          className="app__footer-links_work"
          initial={{ opacity: 0, x: 56 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
        >
          <h1 className="app__footer-headtext">Oras ng Operasyon</h1>
          <p className="p__opensans">Lunes - Biyernes:</p>
          <p className="p__opensans">10:00 AM - 2:00 AM</p>
          <p className="p__opensans">Sabado - Linggo:</p>
          <p className="p__opensans">10:00 AM - 3:00 AM</p>
        </motion.div>
      </div>

      <motion.div
        className="footer__copyright"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeSmooth, delay: 0.5 }}
      >
        <p className="p__opensans">
          {new Date().getFullYear()} Bagong Lasa. Lahat ng Karapatan ay Nakalaan.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;