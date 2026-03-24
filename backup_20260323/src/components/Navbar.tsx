import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/images/logo.jpg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(44, 62, 80, 0.95)' : 'transparent',
      padding: '10px 0',
      transition: 'all 0.3s ease',
      color: '#fff',
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoImg} alt="Fenster Kendic Logo" style={{ height: '50px', borderRadius: '5px' }} />
          <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px', lineHeight: 1.2 }}>
            KENDIĆ <span style={{ color: '#e67e22' }}>FENSTER</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#home" style={{ fontWeight: 600 }}>{t('nav.home')}</a>
          <a href="#services" style={{ fontWeight: 600 }}>{t('nav.services')}</a>
          <a href="#gallery" style={{ fontWeight: 600 }}>{t('nav.gallery')}</a>
          <a href="#contact" style={{ fontWeight: 600 }}>{t('nav.contact')}</a>
          
          <div className="lang-switcher" style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
            <button onClick={() => changeLanguage('bs')} style={langBtnStyle(i18n.language === 'bs')}>BS</button>
            <button onClick={() => changeLanguage('sl')} style={langBtnStyle(i18n.language === 'sl')}>SL</button>
            <button onClick={() => changeLanguage('de')} style={langBtnStyle(i18n.language === 'de')}>DE</button>
            <button onClick={() => changeLanguage('en')} style={langBtnStyle(i18n.language === 'en')}>EN</button>
          </div>

          <a href="https://www.facebook.com/kendicfenster/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '15px', color: '#fff', display: 'flex', alignItems: 'center' }}>
            <Facebook size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: '#2c3e50',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>{t('nav.gallery')}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button onClick={() => changeLanguage('bs')} style={langBtnStyle(i18n.language === 'bs')}>BS</button>
            <button onClick={() => changeLanguage('sl')} style={langBtnStyle(i18n.language === 'sl')}>SL</button>
            <button onClick={() => changeLanguage('de')} style={langBtnStyle(i18n.language === 'de')}>DE</button>
            <button onClick={() => changeLanguage('en')} style={langBtnStyle(i18n.language === 'en')}>EN</button>
          </div>
          <a href="https://www.facebook.com/kendicfenster/" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Facebook size={20} /> Facebook stranica
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; cursor: pointer; }
        }
      `}</style>
    </nav>
  );
};

const langBtnStyle = (active: boolean) => ({
  background: active ? '#e67e22' : 'transparent',
  border: '1px solid #e67e22',
  color: active ? '#fff' : 'inherit',
  padding: '2px 6px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontWeight: 'bold'
});

export default Navbar;
