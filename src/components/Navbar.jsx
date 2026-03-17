import React, { useState } from 'react';
import DropdownLenguage from './Dropdown/DropdownLenguage'; 
import { useTranslation } from 'react-i18next'; 

export default function Navbar() {
  const { t } = useTranslation(); 
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      {/* 1. BARRA SUPERIOR  */}
      <nav className='sticky top-0 w-full h-20 z-50 bg-neutral-900/90 backdrop-blur-md flex items-center border-b border-white/10'>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center'>
          
          {/* IZQUIERDA */}
          <div className='text-xl md:text-2xl font-bold text-white whitespace-nowrap'>
            {t('navbar.titulo')}
          </div>
          
          {/* DERECHA */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* ENLACES DE ESCRITORIO */}
            <div className="hidden md:flex gap-6 font-medium items-center">
              <a href='#inicio' className='text-white no-underline font-semibold text-lg hover:text-purple-400 transition-colors'>{t('navbar.inicio')}</a>
              <a href='#about' className='text-white no-underline font-semibold text-lg hover:text-purple-400 transition-colors'>{t('navbar.sobre_mi')}</a>
              <a href='#proyectos' className='text-white no-underline font-semibold text-lg hover:text-purple-400 transition-colors'>{t('navbar.proyectos')}</a>
              <a href='#habilidades' className='text-white no-underline font-semibold text-lg hover:text-purple-400 transition-colors'>{t('navbar.habilidades')}</a>
            </div>

            {/* SELECTOR DE IDIOMA */}
            <DropdownLenguage />

            {/* BOTÓN HAMBURGUESA  */}
            <button 
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={() => setMenuAbierto(!menuAbierto)}
                aria-label="Toggle menu"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {menuAbierto ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* 2. MENÚ MOBILE */}
      <div className={`
        fixed inset-0 top-20 bg-neutral-900/95 backdrop-blur-lg z-40 flex flex-col items-center justify-start pt-24 gap-10 
        transition-transform duration-300 ease-in-out md:hidden
        ${menuAbierto ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <a href='#inicio' onClick={cerrarMenu} className='text-white no-underline font-bold text-3xl hover:text-purple-400 transition-colors'>{t('navbar.inicio')}</a>
        <a href='#about' onClick={cerrarMenu} className='text-white no-underline font-bold text-3xl hover:text-purple-400 transition-colors'>{t('navbar.sobre_mi')}</a>
        <a href='#proyectos' onClick={cerrarMenu} className='text-white no-underline font-bold text-3xl hover:text-purple-400 transition-colors'>{t('navbar.proyectos')}</a>
        <a href='#habilidades' onClick={cerrarMenu} className='text-white no-underline font-bold text-3xl hover:text-purple-400 transition-colors'>{t('navbar.habilidades')}</a>
      </div>
    </>
  );
}