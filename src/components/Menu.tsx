import Link from 'next/link'
import styles from '@/styles/Menu.module.css'

export const Menu = ({ toggleMenu }: any) => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href='/exhibitions' onClick={toggleMenu}>
          exhibitions
        </Link>
      </li>
      <li>
        <Link href='/artist-statement' onClick={toggleMenu}>
          artist statement
        </Link>
      </li>
      <li>
        <Link href='/contact' onClick={toggleMenu}>
          contact
        </Link>
      </li>
    </ul>
  )
}
