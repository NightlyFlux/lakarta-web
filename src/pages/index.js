import Head from 'next/head'
import Contact from 'src/components/home/Contact'
import Demo from 'src/components/home/Demo'
import FAQ from 'src/components/home/FAQ'
import Features from 'src/components/home/Features'
import Hero from 'src/components/home/Hero'
import DividerImage from 'src/components/UI/DividerImage'

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/icons/favicon.ico' />
        <title>La Karta</title>
      </Head>
      <Hero />
      <DividerImage
        src='/images/divider1.jpg'
        credits={
          <>
            Photo by{' '}
            <a href='https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Dan Gold
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
          </>
        }
      />
      <Features />
      <DividerImage
        src='/images/divider2.jpg'
        credits={
          <>
            Photo by{' '}
            <a href='https://unsplash.com/@skmuse_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Suad Kamardeen
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/restaurant-menu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>{' '}
          </>
        }
      />
      <FAQ />
      <DividerImage
        src='/images/divider1.jpg'
        credits={
          <>
            Photo by{' '}
            <a href='https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Dan Gold
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
          </>
        }
      />
      <Demo />
      <DividerImage
        src='/images/divider2.jpg'
        credits={
          <>
            Photo by{' '}
            <a href='https://unsplash.com/@skmuse_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Suad Kamardeen
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/restaurant-menu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>{' '}
          </>
        }
      />
      <Contact />
    </>
  )
}
