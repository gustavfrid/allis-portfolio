import Link from 'next/link'
import styles from '@/styles/Menu.module.css'

export const Menu = ({ toggleMenu }: any) => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href='/work' onClick={toggleMenu}>
          work
        </Link>
      </li>
      <li>
        <Link href='/about' onClick={toggleMenu}>
          about
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
