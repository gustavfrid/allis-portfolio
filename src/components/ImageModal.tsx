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
        {prevImgSrc && prevImgSrc !== 'null' && (
          <button className={styles.button} onClick={() => handleImageClick(prevImgSrc)}>
            {'<'}
          </button>
        )}
        <button className={styles.button_close} onClick={onClose}></button>

        {nextImgSrc && nextImgSrc !== 'null' && (
          <button className={styles.button} onClick={() => handleImageClick(nextImgSrc)}>
            {'>'}
          </button>
        )}
      </div>
      <Image src={`/${imgSrc}`} alt='Hero image' fill style={{ objectFit: 'contain' }} />
    </div>
  )
}
