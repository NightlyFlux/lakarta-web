export default function Nav({ show, handleToggleMenu, children }) {
  return (
    <nav
      className={`nav ${show ? 'translate-y-14' : '-translate-y-64'}`}
      onClick={handleToggleMenu}
    >
      {children}
    </nav>
  )
}
