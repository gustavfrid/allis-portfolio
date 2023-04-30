import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
import { useState } from 'react'
import { ImageModal } from './ImageModal'

interface GalleryProps {
  imgs: string[]
}

export const Gallery = ({ imgs }: GalleryProps) => {
  const [modal, setModal] = useState<string>('null')

  const onClose = () => {
    setModal('null')
  }

  return (
    <>
      {modal != 'null' && <ImageModal imgSrc={modal} onClose={onClose} />}
      <div className={styles.gallery_container}>
        {imgs.map((img) => (
          <div key={img} className={styles.image_container} onClick={() => setModal(img)}>
            <Image
              src={`/${img}`}
              alt='image from exibition'
              width='0'
              height='0'
              sizes='100vw'
              style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '40vw' }}
            />
          </div>
        ))}
      </div>
    </>
  )
}
