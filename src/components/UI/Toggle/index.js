import { useState } from 'react'

export default function Toggle({
  OnIcon,
  OffIcon,
  onBgColor,
  offBgColor,
  onClick,
}) {
  const [toggle, setToggle] = useState(false)

  const handleToggleClick = () => {
    onClick()
    setToggle(!toggle)
  }

  return (
    <button
      className={`toggle ${
        toggle ? (onBgColor ? onBgColor : '') : offBgColor ? offBgColor : ''
      }`}
      onClick={handleToggleClick}
    >
      <span className={`toggle-dot ${toggle ? 'translate-x-3' : ''}`}>
        {toggle ? <OnIcon /> : <OffIcon />}
      </span>
    </button>
  )
}
