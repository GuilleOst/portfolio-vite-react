import React, { useState } from 'react';
import './DownloadButton.css';
import { useTranslation } from 'react-i18next'; 

const DownloadButton = () => {
  const [clickeado, setClickeado] = useState(false);
  const { t, i18n } = useTranslation(); 

  const manejarDescarga = () => {
    setClickeado(true);

    const link = document.createElement('a');

    const idiomaActual = (i18n.language || 'es').substring(0,2).toLocaleLowerCase();

    if(idiomaActual === 'en'){
      link.href = '/CV/CV-Guillermo-Ostermann-EN.pdf'; 
      link.download = 'CV_Guillermo_Ostermann_EN.pdf'; 
    }else{
      link.href = '/CV/CV-Guillermo-Ostermann-ES.pdf'; 
      link.download = 'CV_Guillermo_Ostermann.pdf'; 
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setClickeado(false);
    }, 10000);
  };

  return (
    <>
      <button 
        className={`rounded-full hover:scale-125 transition-transform ${clickeado ? "activado" : ""}`}
        onClick={manejarDescarga}
      >
        <div>
          <span>
            <p>{t('boton_cv.descargar')}</p> 
          </span>
        </div>
        <div>
          <span>
            <p>{t('boton_cv.gracias')}</p>
          </span>
        </div>
      </button>
    </>
  );
}

export default DownloadButton;