import CategoryCard from './CategoryCard'

export default function Categories({ categories }) {
  return (
    <section className='categories'>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          image={category.image}
        />
      ))}
    </section>
  )
}
