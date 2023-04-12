import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import styles from '@/styles/Layout.module.css'
import bgImg from '@/images/background.jpg'

import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className={styles.background} />
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.not_sidebar}>{children}</div>
      </div>
    </div>
  )
}
