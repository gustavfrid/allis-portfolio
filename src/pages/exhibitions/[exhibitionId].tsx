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
    exhibition: { id: string }
    gallery: [{ src: string; caption: string; heroImg: boolean }]
  }
}

export default function ExhibitionDetailPage({ pageDetails }: PageDetailProps) {
  const router = useRouter()
  const exhibitionId = router.query.exhibitionId

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
  if (!params) {
    return { notFound: true }
  }
  const exhibitionId = params.exhibitionId
  const pageDetails = data.find((work) => work.exhibition?.id === exhibitionId)

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
  const paths = data
    .filter((work) => work.exhibition !== undefined)
    .map((work) => ({ params: { exhibitionId: work.exhibition!.id } }))
  return {
    paths,
    fallback: false,
  }
}
