import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components/Navbar'
import data from 'data/workdata.json'
import { Gallery } from '@/components/Gallery'

interface PageDetailProps {
  pageDetails: {
    id: string
    name: string
    heroImg: string
    text: string
    gallery: [{ src: string; caption: string; heroImg: boolean }]
  }
}

export default function WorkDetailPage({ pageDetails }: PageDetailProps) {
  const router = useRouter()
  const workId = router.query.workId

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
  const pageDetails = data.find((work) => work.id === workId)

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
  const paths = data.map((work) => ({ params: { workId: work.id } }))
  return {
    paths,
    fallback: false,
  }
}
