import styles from '../styles/ExhibitCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface CardProps {
  id: string
  name: string
  heroImg: string
  text: string
}

export const ExhibitCard = ({ name, heroImg, text, id }: CardProps) => {
  const router = useRouter()

  return (
    <div className={styles.card} onClick={() => router.push(`/exhibitions/${id}`)}>
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
