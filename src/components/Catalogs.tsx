import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, BookOpen } from 'lucide-react';

const Catalogs: React.FC = () => {
  const { t } = useTranslation();

  const catalogList = [
    {
      name: 'EGGER',
      title: t('catalogs.viewEgger'),
      // Link koji je korisnik dostavio za Eurodekor kolekciju
      link: 'https://www.egger.com/en/furniture-interior-design/?avl.productTypeTree=EURODEKORFLAMMEX187&country=US',
      color: '#E30613',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'KASTAMONU',
      title: t('catalogs.viewKastamonu'),
      // Link na glavnu stranicu sa svim PDF katalozima (Vision, Glossmax, itd.)
      link: 'https://www.kastamonuentegre.com/en/catalogues',
      color: '#0054A6',
      image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="catalogs" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>{t('catalogs.title')}</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
          {t('catalogs.subtitle')}
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {catalogList.map((cat, i) => (
            <div key={i} style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
            className="catalog-card"
            >
              <div style={{ 
                height: '200px', 
                backgroundImage: `url("${cat.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: cat.color,
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: '0.8rem'
                }}>
                  {cat.name}
                </div>
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>{cat.title}</h3>
                </div>
                <a 
                  href={cat.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                  style={{ 
                    backgroundColor: cat.color, 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px',
                    width: '100%',
                    marginTop: '20px'
                  }}
                >
                  <BookOpen size={18} />
                  {t('catalogs.btnView')}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .catalog-card:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </section>
  );
};

export default Catalogs;
