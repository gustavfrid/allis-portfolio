import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
import { useState } from 'react'
import { ImageModal } from './ImageModal'

interface GalleryProps {
  imgs: [{ src: string; caption: string; heroImg: boolean }]
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
          <div key={img.src} className={styles.image_container} onClick={() => setModal(img.src)}>
            <Image
              src={`/${img.src}`}
              alt='image from exibition'
              width='0'
              height='0'
              sizes='100vw'
              style={{
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                minWidth: 'inherit',
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}
