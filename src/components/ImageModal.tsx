import styles from '@/styles/ImageModal.module.css'
import Image from 'next/image'

interface ModalProps {
  imgSrc: string
  prevImgSrc?: string
  nextImgSrc?: string
  handleImageClick: (src: string) => void
  onClose: () => void
}

export const ImageModal = ({
  imgSrc,
  prevImgSrc,
  nextImgSrc,
  handleImageClick,
  onClose,
}: ModalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <button
          className={styles.button}
          style={{ visibility: `${prevImgSrc === 'null' ? 'hidden' : 'visible'}` }}
          disabled={prevImgSrc === 'null'}
          onClick={() => handleImageClick(prevImgSrc ? prevImgSrc : 'null')}>
          {'<'}
        </button>
        <button className={styles.button_close} onClick={onClose}>
          x
        </button>
        <button
          className={styles.button}
          style={{ visibility: `${nextImgSrc === 'null' ? 'hidden' : 'visible'}` }}
          disabled={nextImgSrc === 'null'}
          onClick={() => handleImageClick(nextImgSrc ? nextImgSrc : 'null')}>
          {'>'}
        </button>
      </div>
      <Image src={`/${imgSrc}`} alt='Hero image' fill style={{ objectFit: 'contain' }} />
    </div>
  )
}
