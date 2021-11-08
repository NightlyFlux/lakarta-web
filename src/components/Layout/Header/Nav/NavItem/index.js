import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function NavItem({ href, children }) {
  return (
    <AnchorLink className='navItem' href={href} offset='56'>
      {children}
    </AnchorLink>
  )
}
