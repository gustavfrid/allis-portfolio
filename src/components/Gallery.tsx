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
    console.log('🚀 ~ file: Gallery.tsx:34 ~ onClose currImgSrc:', currImgSrc)
    console.log('🚀 ~ file: Gallery.tsx:34 ~ onClose prevImgSrc:', prevImgSrc)
    console.log('🚀 ~ file: Gallery.tsx:34 ~ onClose nextImgSrc:', nextImgSrc)

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
    console.log('🚀 ~ file: Gallery.tsx:34 ~ handleImageClick currImgSrc:', currImgSrc)
    console.log('🚀 ~ file: Gallery.tsx:34 ~ handleImageClick prevImgSrc:', prevImgSrc)
    console.log('🚀 ~ file: Gallery.tsx:34 ~ handleImageClick nextImgSrc:', nextImgSrc)
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
