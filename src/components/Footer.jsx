import React from 'react';
import Tooltip from './Tooltip/Tooltip';
import { useTranslation } from 'react-i18next'; 

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-8 mt-auto bg-black/20 backdrop-blur-sm text-white flex flex-col items-center justify-center gap-4">
      <Tooltip />
      <p className="text-sm text-gray-400 font-medium text-center px-4">
        © {new Date().getFullYear()} Guillermo Ostermann. {t('footer.derechos')}
      </p>
    </footer>
  );
}