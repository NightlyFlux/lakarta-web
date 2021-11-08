import WhatsappIcon from 'src/components/icons/WhatsappIcon'
import Button from 'src/components/UI/Button'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-image'>
        <img
          className='hero-mockup'
          src='/images/iphone.png'
          alt='hero mockup image'
        />
        <div className='dot left-1/4 bg-purple-300' />
        <div className='dot bg-yellow-300 animation-delay-2000' />
        <div className='dot right-1/4 bg-pink-300 animation-delay-4000' />
      </div>
      <div className='hero-content'>
        <h1 className='hero-title'>
          <span className='text-primary-500'>La Karta</span> digital para tu
          negocio
        </h1>
        <p className='hero-subtitle'>
          Digitaliza la carta de tu restaurante y permite a tus clientes
          consultarla mediante un código QR.
        </p>
        <Button
          className='bg-whatsapp border-whatsapp w-full hover:bg-whatsapp-hover sm:w-auto'
          icon={<WhatsappIcon />}
          text='Contáctame'
          htmlType='a'
          href='https://wa.me/526646325409'
        />
      </div>
    </section>
  )
}
