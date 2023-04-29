import { Navbar } from '@/components/Navbar'
import styles from '@/styles/Home.module.css'
import { EmailIcon } from '@/images/EmailIcon'
import { InstagramIcon } from '@/images/InstagramIcon'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <h1>contact</h1>
        <div className={styles.social}>
          <a href='mailto:allismatei@gmail.com'>
            <EmailIcon />
          </a>
          <a href='https://www.instagram.com/_allismatei_/' target='_blank'>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  )
}
