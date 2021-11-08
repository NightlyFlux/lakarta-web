export default function Content({ route, children }) {
  return <main className={route === '/' ? 'mt-14' : ''}>{children}</main>
}
