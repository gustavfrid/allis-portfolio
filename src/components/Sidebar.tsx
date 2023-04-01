import styles from '@/styles/Sidebar.module.css'
import { Menu } from './Menu'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Menu />
    </div>
  )
}
