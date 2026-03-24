import React from 'react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/images/slika1.jpg';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100%'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>
          {t('hero.title')}
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
          {t('hero.subtitle')}
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#services" className="btn btn-primary">{t('hero.btnServices')}</a>
          <a href="#contact" className="btn" style={{ border: '2px solid white', color: 'white' }}>{t('hero.btnContact')}</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
