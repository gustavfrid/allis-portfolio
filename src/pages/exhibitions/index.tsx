import { Navbar } from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

import { ExhibitCard } from '@/components/ExhibitCard'
import data from 'data/workdata.json'

export default function ExhibitionsPage() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <h1>exhibitions</h1>
        {data
          .filter((work) => work.exhibition !== undefined)
          .map((work) => (
            <ExhibitCard key={work.id} {...work} id={work.exhibition?.id || work.id} />
          ))}
      </div>
    </>
  )
}
