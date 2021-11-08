import CloseIcon from 'components/icons/CloseIcon'
import LogoIcon from 'components/icons/LogoIcon'
import MenuIcon from 'components/icons/MenuIcon'
import MoonIcon from 'components/icons/MoonIcon'
import SunIcon from 'components/icons/SunIcon'
import Button from 'components/UI/Button'
import Toggle from 'components/UI/Toggle'
import Link from 'next/link'
import { useState } from 'react'
import Nav from './Nav'
import NavItem from './Nav/NavItem'

export default function Header({ route }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleDarkMode = () => {
    document.querySelector('html').classList.toggle('dark')
  }

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={route === '/' ? 'isFixed' : ''}>
      <div className='header'>
        <Link href='/'>
          <a className='logo'>
            <LogoIcon />
            <span className='logo-text'>La Karta</span>
          </a>
        </Link>
        <div className='header-actions'>
          <Toggle
            OnIcon={MoonIcon}
            OffIcon={SunIcon}
            onBgColor='bg-purple-600'
            onClick={handleToggleDarkMode}
          />
          {route === '/' && (
            <Button
              className='bg-transparent border-0 p-2 text-gray-900 dark:text-gray-100'
              icon={showMenu ? <CloseIcon /> : <MenuIcon />}
              onClick={handleToggleMenu}
            />
          )}
        </div>
      </div>
      {route === '/' && (
        <Nav show={showMenu} handleToggleMenu={handleToggleMenu}>
          <NavItem href='#caracteristicas'>Características</NavItem>
          <NavItem href='#testimonios'>Testimonios</NavItem>
          <NavItem href='#preguntas-frecuentes'>Preguntas frecuentes</NavItem>
          <NavItem href='#demo'>Demo</NavItem>
          <NavItem href='#contacto'>Contacto</NavItem>
        </Nav>
      )}
    </header>
  )
}
