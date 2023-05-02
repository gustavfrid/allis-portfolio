import styles from '../styles/Card.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface CardProps {
  name: string
  heroImg: string
  text: string
}

export const Card = ({ name, heroImg, text }: CardProps) => {
  const router = useRouter()

  return (
    <div className={styles.card} onClick={() => router.push(`/work/${name}`)}>
      <div className={styles.thumbnail}>
        <Image src={`/${heroImg}`} alt='Hero image' fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.summary}>
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}
