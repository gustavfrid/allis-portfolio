import { Navbar } from '@/components/Navbar'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <h1>about</h1>
        <p>Textile artist recently graduated from Konstfack Arts and Crafts</p>
        <div className={styles.cv}>
          <h1>CV</h1>
          <h2>Utbildning</h2>
          <p>2018 - 2023 - Konstfack, textil</p>
          <p>2017 - 2018 - Gerlesborgsskolan</p>
          <p>2010 - 2011 - Nyckelviksskolan, Allmän linje</p>
          <h2>Utställningar</h2>

          <Link href={'/work/det-var-en-gang-i-tiden-skog'}>
            <p>2023 - maj - Vårutställning, Konstfack, Stockholm</p>
          </Link>
          <Link href={'/work/lilla-lejonet'}>
            <p>2023 - Knutar, P.A.N.G virserumkonsthall, Virserum</p>
          </Link>
          <p>2023 - apr - Skärholmensvårsalong, FOLKs utställningsrum Ateljé SKHLM, stockholm</p>
          <p>2022 - mar - Skärholmensvårsalong, FOLKs utställningsrum Ateljé SKHLM, stockholm</p>
          <p>2021 - nov - P.A.N.G. hos Galleri K18, Kocksgatan 18, Stockholm. </p>
          <p>2021 - mar - Skärholmensvårsalong, FOLKs utställningsrum Ateljé SKHLM</p>
          <p>2019 - maj - rhythym on/off, fiber spece galleri, Katarina Bangata 40, Stockholm</p>
          <p>2015 - Mamaia Mita, tillsammans med Linea Matei, Gallery Kretsen, Södertälje.</p>
        </div>
      </div>
    </>
  )
}
