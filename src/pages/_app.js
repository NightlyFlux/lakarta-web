import Layout from 'components/Layout'
import ScrollToTop from 'components/UI/ScrollToTop'
import 'styles/global.css'

export default function MyApp({ Component, pageProps, router: { route } }) {
  return (
    <>
      <Layout route={route}>
        <ScrollToTop />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
