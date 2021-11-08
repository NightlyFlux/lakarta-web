import { useState } from 'react'
import ArrowIcon from 'src/components/icons/ArrowIcon'
import Badge from 'src/components/UI/Badge'
import Button from 'src/components/UI/Button'
import {
  addDays,
  capitalize,
  formatPrice,
  toPercentage,
} from 'src/utils/functions'

export default function DishCard({
  dish: { title, description, prices, discount, image, date_created },
}) {
  const [expanded, setExpanded] = useState(false)

  const handleToggleExpanded = () => {
    setExpanded(!expanded)
  }

  const pricesList = prices.map(({ id, title, price }) => (
    <div key={id} className={'dishCard-price'}>
      <p className='dishCard-priceTitle'>{capitalize(title)}</p>
      <p className='dishCard-priceNumber'>
        {formatPrice(price * toPercentage(discount))}{' '}
        {discount > 0 && (
          <small className='dishCard-priceDiscount'>{formatPrice(price)}</small>
        )}
      </p>
    </div>
  ))

  return (
    <div className='dishCard'>
      <div className='dishCard-info'>
        <h5 className='dishCard-title'>{title}</h5>
        <p
          className='dishCard-description'
          onClick={({ target: { classList } }) =>
            classList.toggle('line-clamp-none')
          }
        >
          {description}
        </p>
        {/* Multiple prices - Single price */}
        {prices.length > 1 ? (
          expanded && <div className='dishCard-prices'>{pricesList}</div>
        ) : (
          <p className='dishCard-priceNumber'>
            {formatPrice(prices[0].price * toPercentage(discount))}{' '}
            {discount > 0 && (
              <small className='dishCard-priceDiscount'>
                {formatPrice(prices[0].price)}
              </small>
            )}
          </p>
        )}
        {prices.length > 1 && (
          <Button
            className='border-brand text-brand w-max py-1.5 dark:text-brand hover:bg-brand'
            variant='outline'
            icon={
              <ArrowIcon
                className={`${expanded ? 'rotate-180' : 'rotate-0'}`}
              />
            }
            text='Ver Precios'
            onClick={handleToggleExpanded}
          />
        )}
      </div>
      <figure className='dishCard-imageContainer'>
        {addDays(new Date(date_created), 7) > new Date() && (
          <Badge text='NUEVO' />
        )}
        <img
          className='dishCard-image'
          src={`http://192.168.0.3:8055/assets/${image}`}
          alt={title}
        />
      </figure>
    </div>
  )
}
