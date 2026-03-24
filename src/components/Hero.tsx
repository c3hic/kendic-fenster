import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import promoData from '../data/promo.json';
import galleryData from '../data/gallery.json';
import { Tag } from 'lucide-react';
import defaultBg from '../assets/images/slika1.jpg';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const heroBg = useMemo(() => {
    const images = galleryData.images || [];
    if (images.length === 0) return defaultBg;
    const today = new Date();
    const dayIndex = today.getDate() + today.getMonth() * 31 + today.getFullYear();
    const imageIndex = dayIndex % images.length;
    return images[imageIndex];
  }, []);

  const hasPromoImage = promoData.image && promoData.image !== "";

  return (
    <section id="home" className="hero-section" style={{
      minHeight: '100vh',
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
      padding: '120px 20px 60px'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        <div style={{ flex: 1, maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>
            {t('hero.title')}
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            {t('hero.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="btn btn-primary">{t('hero.btnServices')}</a>
            <a href="#contact" className="btn" style={{ border: '2px solid white', color: 'white' }}>{t('hero.btnContact')}</a>
          </div>
        </div>

        {promoData.active && (
          <div className="promo-card" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #e67e22',
            borderRadius: '20px',
            padding: '25px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            animation: 'float 3s ease-in-out infinite',
            textAlign: 'center',
            overflow: 'hidden'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              backgroundColor: '#e67e22', 
              padding: '5px 15px', 
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              <Tag size={14} />
              PROMO AKCIJA
            </div>
            
            {hasPromoImage && (
              <div style={{ marginBottom: '15px', borderRadius: '10px', overflow: 'hidden', height: '120px' }}>
                <img src={promoData.image} alt="Promo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}

            <h3 style={{ 
              marginBottom: '15px', 
              fontSize: '1.2rem', 
              lineHeight: 1.4, 
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)' 
            }}>
              {promoData.text}
            </h3>
            
            <a href="#contact" className="btn" style={{ 
              backgroundColor: '#e67e22', 
              color: 'white',
              width: '100%',
              marginTop: '10px'
            }}>
              {t('promo.btn')}
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
