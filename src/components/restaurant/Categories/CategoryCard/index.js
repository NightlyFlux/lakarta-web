export default function CategoryCard({ title, image }) {
  return (
    <a className='categoryCard group' href={`#${title.toLowerCase()}`}>
      <h6 className='categoryCard-title'>{title}</h6>
      <img
        className='categoryCard-image'
        src={`http://192.168.0.3:8055/assets/${image}`}
        alt={title}
      />
    </a>
  )
}
