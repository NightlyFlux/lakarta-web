import DishCard from './DishCard'

export default function Dishes({ categories }) {
  return (
    <section className='dishes'>
      {categories.map((category) => (
        <div key={category.id} id={category.title.toLowerCase()}>
          <h2 className='dishes-category'>{category.title}</h2>
          <div className='dishes-list'>
            {category.dishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
