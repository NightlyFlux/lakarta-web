import EditIcon from 'src/components/icons/EditIcon'
import QrIcon from 'src/components/icons/QrIcon'
import ShareIcon from 'src/components/icons/ShareIcon'
import TranslateIcon from 'src/components/icons/TranslateIcon'
import Feature from './Feature'

export default function Features() {
  return (
    <section className='features' id='caracteristicas'>
      <h2 className='features-title'>Caracteristicas</h2>
      <div className='features-list'>
        <Feature
          icon={<QrIcon />}
          title='Sin contacto'
          description='Tus clientes podrán consultar tu carta de una manera segura.'
        />
        <Feature
          icon={<EditIcon />}
          title='Autoadministrable'
          description='Personaliza el logo, color y platillos de tu carta a tu gusto.'
        />
        <Feature
          icon={<ShareIcon />}
          title='Comparte tu carta'
          description='Comparte tu carta digital a través de redes sociales.'
        />
        <Feature
          icon={<TranslateIcon />}
          title='Multilenguaje (Prox.)'
          description='Muestra tu carta digital en español e inglés.'
        />
      </div>
    </section>
  )
}
