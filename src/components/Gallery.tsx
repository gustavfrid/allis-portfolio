import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
import { useState } from 'react'
import { ImageModal } from './ImageModal'

interface GalleryProps {
  imgs: [{ src: string; caption: string; heroImg: boolean }]
}

interface ModalProp {}

export const Gallery = ({ imgs }: GalleryProps) => {
  const [currImgSrc, setCurrImgSrc] = useState<string>('null')
  const [prevImgSrc, setPrevImgSrc] = useState<string>('null')
  const [nextImgSrc, setNextImgSrc] = useState<string>('null')

  const onClose = () => {
    setCurrImgSrc('null')
  }

  const handleImageClick = (src: string) => {
    setPrevImgSrc('null')
    setNextImgSrc('null')
    const imgIndex = imgs.findIndex((img) => img.src === src)
    if (imgIndex > 0) {
      const prevImgIndex = imgIndex - 1
      setPrevImgSrc(imgs[prevImgIndex].src)
    }
    if (imgIndex + 1 < imgs.length) {
      const nextImgIndex = imgIndex + 1
      setNextImgSrc(imgs[nextImgIndex].src)
    }

    setCurrImgSrc(src)
  }

  return (
    <>
      {currImgSrc != 'null' && (
        <ImageModal
          imgSrc={currImgSrc}
          prevImgSrc={prevImgSrc}
          nextImgSrc={nextImgSrc}
          handleImageClick={handleImageClick}
          onClose={onClose}
        />
      )}
      <div className={styles.gallery_container}>
        {imgs.map((img) => (
          <div
            key={img.src}
            className={styles.image_container}
            onClick={() => handleImageClick(img.src)}>
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
