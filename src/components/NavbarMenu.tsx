import Link from 'next/link'
import styles from '@/styles/NavbarMenu.module.css'
import { menu } from './Menu'

export const NavbarMenu = ({ toggleMenu }: any) => {
  return (
    <ul className={styles.list}>
      {menu.map((item) => (
        <li key={item}>
          <Link href={`/${item}`} onClick={toggleMenu}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}
