export default function DividerImage({ src, credits }) {
  return (
    <figure className='divider'>
      <img className='divider-image' src={src} alt='divider' />
      {credits && (
        <figcaption className='divider-caption'>{credits}</figcaption>
      )}
    </figure>
  )
}
