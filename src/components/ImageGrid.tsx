import styles from '@/styles/ImageGrid.module.css'
import Image from 'next/image'
import data from 'data/workdata.json'
import { useRouter } from 'next/router'

export const ImageGrid = () => {
  const router = useRouter()
  return (
    <div className={styles.grid}>
      {data.map((work) => (
        <div
          className={styles.container}
          key={work.name}
          onClick={() => router.push(`/work/${work.name}`)}>
          <div className={styles.overlay}>
            <p>{work.name}</p>
          </div>
          <Image src={`/${work.heroImg}`} alt='Hero image' fill style={{ objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  )
}
