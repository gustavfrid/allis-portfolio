import Link from 'next/link'
import styles from '@/styles/Menu.module.css'
import { menu } from './Menu'

export const OverlayMenu = ({ toggleMenu }: any) => {
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
