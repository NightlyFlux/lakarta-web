import WebsiteIcon from 'src/components/icons/WebsiteIcon'
import WhatsappIcon from 'src/components/icons/WhatsappIcon'
import Button from 'src/components/UI/Button'

export default function Info({ name, address, phone, website }) {
  return (
    <section className='info'>
      <h1 className='info-name'>{name}</h1>
      <p className='info-address'>{address}</p>
      <div className='info-buttons'>
        <Button
          className='bg-whatsapp border-whatsapp w-full'
          icon={<WhatsappIcon />}
          text='WhatsApp'
          htmlType='a'
          href={`https://wa.me/52${phone}`}
        />
        {website && (
          <Button
            className={
              'border-brand text-brand w-full dark:text-brand hover:bg-brand'
            }
            variant='outline'
            icon={<WebsiteIcon />}
            text='Sitio Web'
            htmlType='a'
            href={website}
          />
        )}
      </div>
    </section>
  )
}
