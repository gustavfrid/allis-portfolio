import { Navbar } from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

import { Card } from '@/components/Card'
import data from 'data/workdata.json'

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <h1>work</h1>
        {data.map((work) => (
          <Card key={work.id} {...work} />
        ))}
      </div>
    </>
  )
}
