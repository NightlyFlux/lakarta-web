import Link from 'next/link'

export default function Demo() {
  return (
    <section className='demo' id='demo'>
      <h2 className='demo-title'>Demo</h2>
      <div className='demo-content'>
        <Link href='/demo'>
          <a className='demo-card'>
            <p className='demo-cardText'>Escanea el código QR o haz click</p>
            <img
              className='demo-cardImage'
              src='https://www.buenacarta.com/images/qr-demo.png'
              alt='demo qr'
            />
            <p>lakarta.mx/demo</p>
          </a>
        </Link>
      </div>
    </section>
  )
}
