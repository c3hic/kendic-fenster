import React, { useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const JobApplication: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myknqqjk', {
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
        <button onClick={onClose} style={closeButtonStyle} aria-label="Close"><X /></button>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>{t('jobForm.title')}</h2>
        
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h3 style={{ color: '#27ae60' }}>{t('jobForm.successTitle')}</h3>
            <p style={{ marginTop: '10px' }}>{t('jobForm.successText')}</p>
            <button onClick={onClose} className="btn btn-primary" style={{ marginTop: '20px' }}>{t('jobForm.close')}</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Hidden subject for Formspree */}
            <input type="hidden" name="_subject" value={`${t('jobForm.title')} - ${name || 'Nepoznato ime'}`} />
            
            <h4 style={fieldsetTitleStyle}>{t('jobForm.sectionCandidate')}</h4>
            <input type="text" name="ime_i_prezime" required placeholder={t('jobForm.namePlaceholder')} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input type="tel" name="broj_telefona" required placeholder={t('jobForm.phonePlaceholder')} style={inputStyle} />
            <input type="text" name="godiste_drzavljanstvo" placeholder={t('jobForm.birthPlacePlaceholder')} style={inputStyle} />
            <input type="text" name="adresa_stanovanja" required placeholder={t('jobForm.addressPlaceholder')} style={inputStyle} />
            <input type="text" name="zavrsena_skola" placeholder={t('jobForm.educationPlaceholder')} style={inputStyle} />
            <textarea name="poznavanje_racunara" placeholder={t('jobForm.computerSkillsPlaceholder')} rows={3} style={inputStyle}></textarea>
            <input type="text" name="poznavanje_stranog_jezika" placeholder={t('jobForm.languagesPlaceholder')} style={inputStyle} />

            <h4 style={fieldsetTitleStyle}>{t('jobForm.sectionExperience')}</h4>
            <textarea name="radno_iskustvo_prethodni_poslodavci" placeholder={t('jobForm.experiencePlaceholder')} rows={3} style={inputStyle}></textarea>
            <textarea name="koje_poslove_obavljali" placeholder={t('jobForm.jobDescPlaceholder')} rows={4} style={inputStyle}></textarea>

            <h4 style={fieldsetTitleStyle}>{t('jobForm.sectionAdditional')}</h4>
            <input type="text" name="vozacka_dozvola" placeholder={t('jobForm.drivingLicensePlaceholder')} style={inputStyle} />
            <input type="text" name="bracni_status" placeholder={t('jobForm.maritalStatusPlaceholder')} style={inputStyle} />
            <input type="text" name="djeca" placeholder={t('jobForm.childrenPlaceholder')} style={inputStyle} />
            <input type="text" name="zeljeno_radno_vrijeme" placeholder={t('jobForm.workHoursPlaceholder')} style={inputStyle} />
            <input type="text" name="konzumacija_supstanci" placeholder={t('jobForm.substancesPlaceholder')} style={inputStyle} />
            <input type="text" name="krivicno_gonjenje" placeholder={t('jobForm.criminalRecordPlaceholder')} style={inputStyle} />
            <input type="text" name="ocekivana_plata" placeholder={t('jobForm.expectedSalaryPlaceholder')} style={inputStyle} />
            <input type="text" name="teske_bolesti" placeholder={t('jobForm.healthPlaceholder')} style={inputStyle} />
            
            <label htmlFor="stambeno_pitanje" style={fieldsetTitleStyle}>{t('jobForm.housingLabel')}</label>
            <select name="stambeno_pitanje" id="stambeno_pitanje" style={inputStyle}>
                <option value="">{t('jobForm.housingOptionDefault')}</option>
                <option value="vlasnistvo">{t('jobForm.housingOptionOwned')}</option>
                <option value="roditelji">{t('jobForm.housingOptionParents')}</option>
                <option value="podstanar">{t('jobForm.housingOptionTenant')}</option>
                <option value="drugo">{t('jobForm.housingOptionOther')}</option>
            </select>

            <input type="text" name="posjedovanje_auta" placeholder={t('jobForm.carPlaceholder')} style={inputStyle} />
            <input type="text" name="prijava_na_biro" placeholder={t('jobForm.unemploymentOfficePlaceholder')} style={inputStyle} />
            <textarea name="razlog_interesovanja" placeholder={t('jobForm.interestReasonPlaceholder')} rows={3} style={inputStyle}></textarea>
            <textarea name="ocekivanja_od_poslodavca" placeholder={t('jobForm.expectationsPlaceholder')} rows={3} style={inputStyle}></textarea>
            <textarea name="vidjenje_za_5_godina" placeholder={t('jobForm.fiveYearPlanPlaceholder')} rows={3} style={inputStyle}></textarea>

            <div style={{fontSize: '0.8rem', color: '#666', textAlign: 'center', marginTop: '10px'}}>
              <p style={{ fontWeight: 'bold', color: '#c0392b' }}>{t('jobForm.warningIncomplete')}</p>
              <p style={{ marginTop: '5px' }}>{t('jobForm.warningSpecialist')}</p>
            </div>
            
            <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
              {status === 'submitting' && <Loader2 className="animate-spin" size={20} />}
              {t('jobForm.submitBtn')}
            </button>
            {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>{t('jobForm.errorMsg')}</p>}
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
