import Content from './Content'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ route, children }) {
  return (
    <>
      <Header route={route} />
      <Content route={route}>{children}</Content>
      <Footer />
    </>
  )
}
