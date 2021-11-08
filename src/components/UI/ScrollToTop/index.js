import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'
import ArrowIcon from 'src/components/icons/ArrowIcon'
import Button from '../Button'

export default function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useScrollPosition(
    ({ _, currPos }) => {
      if (currPos.y <= -200) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    },
    [showScrollButton]
  )

  return (
    <Button
      className={`scrollToTop ${
        showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      icon={<ArrowIcon className='rotate-180' />}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  )
}
