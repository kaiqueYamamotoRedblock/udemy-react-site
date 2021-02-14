import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@components/navigation'

const Hello = () => (

  <>
    <Head>
      <title> Hello There :: My Blog </title>
      <meta property="og:title" content="Hello There :: My Blog"/>
    </Head>

    <Navigation />
    <article>
      <h1>Hello There !</h1>
      <Image src="/posts/hello-there/1.jpg" width={640} height={427}/>
    </article>
  </>
  
)

export default Hello