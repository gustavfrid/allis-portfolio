import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { MenuIcon } from '@/images/MenuIcon'
import { CloseMenuIcon } from '@/images/CloseMenuIcon'
import { OverlayMenu } from './OverlayMenu'
import { useState } from 'react'
import { NavbarMenu } from './NavbarMenu'
import Image from 'next/image'

interface NavbarProps {
  heroImg?: string
  height?: string
}

export const Navbar = ({ heroImg, height }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <>
      {isOpen && <OverlayMenu toggleMenu={toggleMenu} />}
      <div className={styles.navbar} style={{ height: `${height ? height : '40px'}` }}>
        {heroImg && (
          <Image
            src={`/${heroImg}`}
            alt='Hero image'
            fill
            style={{ objectFit: 'cover', zIndex: '-2' }}
          />
        )}
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
