import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components/Navbar'
import data from 'data/workdata.json'
import { Gallery } from '@/components/Gallery'

interface PageDetailProps {
  pageDetails: { name: string; heroImg: string; text: string; gallery: [string] }
}

export default function WorkDetailPage({ pageDetails }: PageDetailProps) {
  const router = useRouter()
  const workId = router.query.workId
  console.log(pageDetails)

  return (
    <>
      <Navbar heroImg={pageDetails.heroImg} height={'40vh'} />
      <div className={styles.main}>
        <h1>{pageDetails.name}</h1>
        <p>{pageDetails.text}</p>
        <Gallery imgs={pageDetails.gallery} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const workId = params!.workId
  const pageDetails = data.find((work) => work.name === workId)

  if (!pageDetails) {
    return { notFound: true }
  }

  return {
    props: {
      pageDetails,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = data.map((work) => ({ params: { workId: work.name } }))
  return {
    paths,
    fallback: false,
  }
}
