import { useState } from 'react'
import Button from 'src/components/UI/Button'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section className='contact' id='contacto'>
      <h2 className='contact-title'>Contacto</h2>
      <form
        className='contact-form'
        action={`mailto:nightlyflux@mail.com?subject=${name}-${email}&body=${message}`}
      >
        <input
          className='contact-formInput '
          name='name'
          placeholder='Nombre'
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          required
        />
        <input
          className='contact-formInput '
          name='email'
          placeholder='Correo electrónico'
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          required
          type='email'
        />
        <textarea
          className='contact-formInput resize-none sm:col-span-2'
          name='message'
          placeholder='Mensaje...'
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          required
          rows='4'
        />
        <Button
          className='bg-primary-500 hover:bg-opacity-80 sm:col-span-2'
          text='Enviar mensaje'
          type='submit'
        />
      </form>
    </section>
  )
}
