import { forwardRef } from 'react'

const Button = forwardRef(
  (
    {
      className,
      style,
      variant,
      icon,
      text,
      type,
      htmlType = 'button',
      href,
      onClick,
    },
    ref
  ) => {
    const Component = htmlType

    const setVariant = () => {
      switch (variant) {
        case 'outline':
          return ' btn-outline '
        default:
          return ' '
      }
    }

    return (
      <Component
        ref={ref}
        className={`btn${setVariant()}${className ? className : ''}`}
        style={style}
        href={href}
        onClick={onClick}
        target='_blank'
        type={type}
      >
        {icon && icon}
        {text && <span>{text}</span>}
      </Component>
    )
  }
)

export default Button
