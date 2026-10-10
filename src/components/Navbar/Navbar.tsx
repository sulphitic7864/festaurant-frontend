import React from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Moon, Sun } from 'lucide-react';
import images from '../../constants/images';
import './Navbar.css';

const navEase = [0.25, 0.46, 0.45, 0.94] as const;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [isLightTheme, setIsLightTheme] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('restaurant-theme') === 'light';
  });

  React.useEffect(() => {
    document.documentElement.dataset.theme = isLightTheme ? 'light' : 'dark';
    localStorage.setItem('restaurant-theme', isLightTheme ? 'light' : 'dark');
  }, [isLightTheme]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget.getAttribute('href') || '').trim();
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setToggleMenu(false);
  };

  return (
    <motion.nav
      className="app__navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: navEase }}
    >
      <div className="app__navbar-logo">
        <img src={images.bagonglasa} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home" onClick={handleNavClick}>Tahanan</a></li>
        <li className="p__opensans"><a href="#about" onClick={handleNavClick}>Tungkol sa Amin</a></li>
        <li className="p__opensans"><a href="#menu" onClick={handleNavClick}>Menu</a></li>
        <li className="p__opensans"><a href="#awards" onClick={handleNavClick}>Parangal</a></li>
        <li className="p__opensans"><a href="#contact" onClick={handleNavClick}>Kontak</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans" onClick={handleNavClick}>Mag-login / Rehistro</a>
        <div />
        <a href="/" className="p__opensans">Magpareserba</a>
        <button
          type="button"
          className="app__navbar-theme-toggle"
          aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
          title={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
          onClick={() => setIsLightTheme((current) => !current)}
        >
          {isLightTheme ? <Moon size={18} strokeWidth={1.8} /> : <Sun size={18} strokeWidth={1.8} />}
        </button>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={handleNavClick}>Tahanan</a></li>
              <li><a href="#about" onClick={handleNavClick}>Tungkol sa Amin</a></li>
              <li><a href="#menu" onClick={handleNavClick}>Menu</a></li>
              <li><a href="#awards" onClick={handleNavClick}>Parangal</a></li>
              <li><a href="#contact" onClick={handleNavClick}>Kontak</a></li>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;