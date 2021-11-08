export default function Badge({ text }) {
  return (
    <label className='badge'>
      {text}
      <span className='badge-ping' />
    </label>
  )
}
