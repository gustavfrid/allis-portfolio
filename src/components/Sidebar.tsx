import styles from '@/styles/Sidebar.module.css'
import { menu } from './Menu'
import Link from 'next/link'
import { EmailIcon } from '@/images/EmailIcon'
import { InstagramIcon } from '@/images/InstagramIcon'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.list}>
        {menu.map((item) => (
          <li key={item}>
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
        <li>
          <a href='mailto:allismatei@gmail.com'>
            <EmailIcon />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/_allismatei_/' target='_blank'>
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}
