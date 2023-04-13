import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { MenuIcon } from '@/images/MenuIcon'
import { CloseMenuIcon } from '@/images/CloseMenuIcon'
import { OverlayMenu } from './OverlayMenu'
import { useState } from 'react'
import { NavbarMenu } from './NavbarMenu'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }

    console.log('click toggle')
  }

  return (
    <>
      {isOpen && <OverlayMenu toggleMenu={toggleMenu} />}
      <div className={styles.navbar}>
        <Link href='/' className={styles.title}>
          allis matei
        </Link>
        <NavbarMenu />
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {!isOpen && <MenuIcon />}
          {isOpen && <CloseMenuIcon />}
        </div>
      </div>
    </>
  )
}
