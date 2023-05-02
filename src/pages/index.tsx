import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components/Navbar'
import { ImageGrid } from '@/components/ImageGrid'

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Allis Portfolio</title>
        <meta name='description' content='Portfolio av Allis Matei' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <ImageGrid />
      </main>
    </>
  )
}
