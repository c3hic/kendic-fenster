import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const JobApplication: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation(); // Koristimo prevod za naslove, ali ovdje je jednostavnije direktno pisati tekst
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myknqqjk', { // Formspree endpoint
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}><X /></button>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Prijava za posao 2026</h2>
        
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h3 style={{ color: '#27ae60' }}>Hvala na prijavi!</h3>
            <p style={{ marginTop: '10px' }}>Vaša aplikacija je uspješno poslana. Kontaktirat ćemo vas uskoro.</p>
            <button onClick={onClose} className="btn btn-primary" style={{ marginTop: '20px' }}>Zatvori</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Hidden subject for Formspree */}
            <input type="hidden" name="_subject" value={`Prijava za posao 2026 - ${name || 'Nepoznato ime'}`} />
            
            <h4 style={fieldsetTitleStyle}>Podaci o kandidatu</h4>
            <input type="text" name="ime_i_prezime" required placeholder="Ime i prezime" onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input type="tel" name="broj_telefona" required placeholder="Broj telefona" style={inputStyle} />
            <input type="text" name="godiste_drzavljanstvo" placeholder="Godište i Državljanstvo" style={inputStyle} />
            <input type="text" name="adresa_stanovanja" required placeholder="Adresa stanovanja" style={inputStyle} />
            <input type="text" name="zavrsena_skola" placeholder="Završena škola" style={inputStyle} />
            <textarea name="poznavanje_racunara" placeholder="Poznavanje rada na računaru i kojim programima vladate" rows={3} style={inputStyle}></textarea>
            <input type="text" name="poznavanje_stranog_jezika" placeholder="Poznavanje stranog jezika i kojeg" style={inputStyle} />

            <h4 style={fieldsetTitleStyle}>Radno iskustvo</h4>
            <textarea name="radno_iskustvo_prethodni_poslodavci" placeholder="Da li ste već radili i gdje? (radno iskustvo)" rows={3} style={inputStyle}></textarea>
            <textarea name="koje_poslove_obavljali" placeholder="Koje ste poslove obavljali" rows={4} style={inputStyle}></textarea>

            <h4 style={fieldsetTitleStyle}>Dodatne informacije</h4>
            <input type="text" name="vozacka_dozvola" placeholder="Da li posjedujete vozačku dozvolu (koje kategorije)" style={inputStyle} />
            <input type="text" name="bracni_status" placeholder="Da li ste oženjeni" style={inputStyle} />
            <input type="text" name="djeca" placeholder="Da li imate djece (koliko)" style={inputStyle} />
            <input type="text" name="zeljeno_radno_vrijeme" placeholder="Radno vrijeme koje bi vam odgovaralo (rad u noćnoj)" style={inputStyle} />
            <input type="text" name="konzumacija_supstanci" placeholder="Konzumirate li alkohol, droge" style={inputStyle} />
            <input type="text" name="krivicno_gonjenje" placeholder="Da li ste osuđivani ili krivično gonjeni?" style={inputStyle} />
            <input type="text" name="ocekivana_plata" placeholder="Sa koliko platom bi bili zadovoljni" style={inputStyle} />
            <input type="text" name="teske_bolesti" placeholder="Da li ste bolovali od teških bolesti" style={inputStyle} />
            
            <label htmlFor="stambeno_pitanje" style={fieldsetTitleStyle}>Stambeno pitanje</label>
            <select name="stambeno_pitanje" id="stambeno_pitanje" style={inputStyle}>
                <option value="">Odaberite opciju</option>
                <option value="Stan/kuća u vlasništvu">Stan/kuća u vlasništvu</option>
                <option value="Sa roditeljima">Sa roditeljima</option>
                <option value="Podstanar">Podstanar</option>
                <option value="Drugo">Drugo</option>
            </select>

            <input type="text" name="posjedovanje_auta" placeholder="Dali posjedujete auto" style={inputStyle} />
            <input type="text" name="prijava_na_biro" placeholder="Da li ste prijavljeni na biro rada" style={inputStyle} />
            <textarea name="razlog_interesovanja" placeholder="Razlog interesovanja za posao" rows={3} style={inputStyle}></textarea>
            <textarea name="ocekivanja_od_poslodavca" placeholder="Od poslodavca očekujem" rows={3} style={inputStyle}></textarea>
            <textarea name="vidjenje_za_5_godina" placeholder="Gdje se vidite za 5 god?" rows={3} style={inputStyle}></textarea>

            <div style={{fontSize: '0.8rem', color: '#666', textAlign: 'center', marginTop: '10px'}}>
              <p>Aplikacija koje nisu kompletne popunjene ne uzimaju se u razmatranje !!!</p>
              <p>Ukoliko ste radili kao stolar ili neke od poslova lakiranje i imate dovoljno iskustva za samostalan rad OBAVEZNO to naznačite u aplikaciji.</p>
            </div>
            
            <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
              {status === 'submitting' && <Loader2 className="animate-spin" size={20} />}
              Pošalji Prijavu
            </button>
            {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>Došlo je do greške. Molimo pokušajte ponovo.</p>}
          </form>
        )}
      </div>
    </div>
  );
};

// Styles
const overlayStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
  backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', 
  zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
};

const modalStyle: React.CSSProperties = {
  backgroundColor: '#fff', padding: '30px', borderRadius: '12px', 
  width: '100%', maxWidth: '550px', maxHeight: '90vh', overflowY: 'auto', 
  position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', 
  cursor: 'pointer', color: '#888'
};

const inputStyle: React.CSSProperties = { 
  padding: '12px', borderRadius: '8px', border: '1px solid #ccc', 
  width: '100%', boxSizing: 'border-box', fontSize: '1rem' 
};

const fieldsetTitleStyle: React.CSSProperties = {
  margin: '10px 0 0', color: '#e67e22', borderBottom: '1px solid #eee', paddingBottom: '5px'
};

export default JobApplication;
