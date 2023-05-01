import styles from '@/styles/ImageModal.module.css'
import Image from 'next/image'

interface ModalProps {
  imgSrc: string
  onClose: () => void
}

export const ImageModal = ({ imgSrc, onClose }: ModalProps) => {
  return (
    <div className={styles.container} onClick={onClose}>
      <Image src={`/${imgSrc}`} alt='Hero image' fill style={{ objectFit: 'contain' }} />
    </div>
  )
}
