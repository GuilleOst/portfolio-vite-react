import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

export default function DropdownLenguage() {
  const { i18n } = useTranslation()


  const idiomaActual = (i18n.language || 'es').substring(0, 2).toLowerCase();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton 
          className="w-9 h-9 flex items-center justify-center rounded-full overflow-hidden outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ring-0 shadow-none hover:opacity-80 transition-opacity cursor-pointer border-none bg-transparent p-0 m-0"
          style={{ WebkitTapHighlightColor: 'transparent' }} 
        >
          {idiomaActual === 'en' ? (
            <span className="fi fi-gb fis text-[36px] rounded-full block leading-none bg-cover bg-center"></span>
          ) : (
            <span className="fi fi-ar fis text-[36px] rounded-full block leading-none bg-cover bg-center"></span>
          )}
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-none ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          
          <MenuItem>
            {({ focus }) => (
              <button
                onClick={() => i18n.changeLanguage('es')}
                type="button"
                className={`${
                  focus ? 'bg-gray-100 text-[#FEAE0B]' : 'text-gray-700'
                } flex w-full items-center px-4 py-2 text-left text-sm font-medium transition-colors outline-none focus:outline-none focus:ring-0 shadow-none border-none`}
              >
                <span className="fi fi-ar fis mr-3 rounded-sm text-lg"></span>
                Español
              </button>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <button
                onClick={() => i18n.changeLanguage('en')}
                type="button"
                className={`${
                  focus ? 'bg-gray-100 text-[#FEAE0B]' : 'text-gray-700'
                } flex w-full items-center px-4 py-2 text-left text-sm font-medium transition-colors outline-none focus:outline-none focus:ring-0 shadow-none border-none`}
              >
                <span className="fi fi-gb fis mr-3 rounded-sm text-lg"></span>
                Inglés
              </button>
            )}
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>
  )
}