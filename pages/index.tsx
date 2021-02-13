import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { getPostsList } from '@shared/util'
import Header from '@components/header'
import Navigation from "@components/navigation"
import Link from 'next/link'

type PostList = string[]

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navigation />
        <Header />
        {
          posts.length > 0 && (
            <ul>
              { posts.map((slug) => ( 
                <li key={slug}>
                  <Link href={`posts/${slug}`}>
                    <a>
                      {slug.split('-').join(' ')}
                    </a>
                  </Link>
                </li>
              ))} 
            </ul>
          )
        }
      </main>

    </>
  )
}

export const getStaticProps = async () => {
  const posts:PostList = getPostsList()
  return {
    props: {
      posts
    }
  }
}

export default Home