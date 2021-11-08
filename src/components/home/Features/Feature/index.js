export default function Feature({ icon, title, description }) {
  return (
    <div className='feature'>
      <figure className='feature-icon'>{icon}</figure>
      <h3 className='feature-title'>{title}</h3>
      <p className='feature-description'>{description}</p>
    </div>
  )
}
