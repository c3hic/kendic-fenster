import React from 'react';
import { Scissors, Wrench, Layers } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scissors size={40} />,
      title: 'Precizno Rezanje',
      desc: 'Savremeno rezanje iverice na najsavremenijim mašinama po vašim tačnim merama.'
    },
    {
      icon: <Layers size={40} />,
      title: 'Kantiranje',
      desc: 'Kvalitetno kantiranje ABS i PVC trakama za dugovečnost i estetski savršen finiš.'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Prodaja Okova',
      desc: 'Širok izbor šarki, klizača, ručica i ostalih komponenti vrhunskih brendova.'
    }
  ];

  return (
    <section id="services">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Naše Usluge</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {services.map((s, i) => (
          <div key={i} style={{ 
            padding: '40px', 
            backgroundColor: 'white', 
            borderRadius: '10px', 
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ color: '#e67e22', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p style={{ color: '#666' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
