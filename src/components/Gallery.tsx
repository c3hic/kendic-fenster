import React from 'react';
import { useTranslation } from 'react-i18next';
import galleryData from '../data/gallery.json';

const LogoEgger = () => (
  <svg viewBox="0 0 400 100" style={{ width: '100%', height: '100%' }}>
    <path d="M20 20h360v60H20z" fill="#E30613" />
    <text x="200" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="45" fill="white" textAnchor="middle">EGGER</text>
  </svg>
);

const LogoGTV = () => (
  <svg viewBox="0 0 300 100" style={{ width: '100%', height: '100%' }}>
    <text x="150" y="70" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="70" fill="#00529B" textAnchor="middle">GTV</text>
    <rect x="50" y="80" width="200" height="4" fill="#00529B" />
  </svg>
);

const LogoKastamonu = () => (
  <svg viewBox="0 0 400 120" style={{ width: '100%', height: '100%' }}>
    <text x="200" y="55" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#0054A6" textAnchor="middle">KASTAMONU</text>
    <text x="200" y="90" fontFamily="Arial, sans-serif" fontWeight="normal" fontSize="22" fill="#00A651" textAnchor="middle" letterSpacing="2">ENTEGRE</text>
    <rect x="50" y="65" width="300" height="2" fill="#00A651" />
  </svg>
);

const LogoFalco = () => (
  <svg viewBox="0 0 400 100" style={{ width: '100%', height: '100%' }}>
    <text x="200" y="65" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="45" fill="#1B365D" textAnchor="middle">FALCO</text>
    <text x="200" y="85" fontFamily="Arial, sans-serif" fontSize="15" fill="#1B365D" textAnchor="middle">WOOD INDUSTRY</text>
  </svg>
);

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const brands = [
    { 
      name: 'Egger', 
      component: <LogoEgger />, 
      link: 'https://www.egger.com/en/furniture-interior-design/?avl.productTypeTree=EURODEKORFLAMMEX187&country=US' 
    },
    { 
      name: 'Kastamonu', 
      component: <LogoKastamonu />, 
      link: 'https://www.kastamonuentegre.com/en/catalogues' 
    },
    { 
      name: 'Falco', 
      component: <LogoFalco />, 
      link: 'https://www.falco-woodindustry.com/en/downloads' 
    },
    { 
      name: 'GTV', 
      component: <LogoGTV />, 
      link: 'https://www.gtv.com.pl/en/products/' 
    }
  ];

  const projectImages = galleryData.images || [];

  return (
    <section id="gallery" style={{ backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>{t('gallery.title')}</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '10px', maxWidth: '600px', margin: '0 auto' }}>
        {t('gallery.subtitle')}
      </p>
      <p style={{ textAlign: 'center', color: '#e67e22', fontWeight: 600, fontSize: '0.9rem', marginBottom: '50px' }}>
        {t('gallery.clickHint')}
      </p>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {brands.map((b, i) => (
          <a 
            key={i} 
            href={b.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              width: '200px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              filter: 'grayscale(100%) opacity(0.6)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {b.component}
          </a>
        ))}
      </div>

      <div style={{ 
        marginTop: '80px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        {projectImages.map((img, i) => (
          <div key={i} style={{ 
            height: '350px', 
            borderRadius: '10px',
            backgroundImage: `url("${img}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
