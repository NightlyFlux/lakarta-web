export default function Cover({ cover, logo }) {
  return (
    <section className='heading'>
      <img
        className='heading-cover'
        src={`http://192.168.0.3:8055/assets/${cover}`}
        alt='Cover'
      />
      <img
        className='heading-logo'
        src={`http://192.168.0.3:8055/assets/${logo}`}
        alt='Logo'
      />
    </section>
  )
}
