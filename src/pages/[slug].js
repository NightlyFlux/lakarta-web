import Head from 'next/head'
import { useEffect } from 'react'
import Categories from 'src/components/restaurant/Categories'
import Dishes from 'src/components/restaurant/Dishes'
import Cover from 'src/components/restaurant/Heading'
import Info from 'src/components/restaurant/Info'
import Empty from 'src/components/UI/Empty'
import { http } from '../api'

export default function Restaurante({ restaurant }) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--brand',
      restaurant.brand_color
    )
  }, [])

  return (
    <>
      <Head>
        <link
          rel='icon'
          href={`http://192.168.0.3:8055/assets/${restaurant.logo}`}
        />
        <title>{restaurant.name} - La Karta</title>
      </Head>
      <Cover cover={restaurant.cover} logo={restaurant.logo} />
      <Info
        name={restaurant.name}
        address={restaurant.address}
        phone={restaurant.phone}
        website={restaurant.website}
      />
      <hr />
      {restaurant.categories.length ? (
        <>
          <Categories categories={restaurant.categories} />
          <Dishes categories={restaurant.categories} />
        </>
      ) : (
        <Empty message='¡No tienes categorias registradas!' />
      )}
    </>
  )
}

export async function getStaticPaths() {
  const {
    data: { data: restaurantSlugs },
  } = await http.get('/items/restaurants?fields=slug')

  const paths = restaurantSlugs.map((restaurant) => ({
    params: { slug: restaurant.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const fields = [
    'slug',
    'brand_color',
    'cover',
    'logo',
    'name',
    'address',
    'phone',
    'website',
    'categories.id',
    'categories.image',
    'categories.title',
    'categories.dishes.id',
    'categories.dishes.date_created',
    'categories.dishes.image',
    'categories.dishes.title',
    'categories.dishes.description',
    'categories.dishes.discount',
    'categories.dishes.prices.id',
    'categories.dishes.prices.title',
    'categories.dishes.prices.price',
  ].toString()

  const filter = JSON.stringify({
    _and: [
      {
        status: {
          _eq: 'published',
        },
      },
      {
        slug: {
          _eq: params.slug,
        },
      },
    ],
  })

  const deep = JSON.stringify({
    categories: {
      _sort: 'sort',
      _filter: {
        _and: [
          {
            status: {
              _eq: 'published',
            },
          },
          {
            dishes: {
              id: {
                _nnull: 'true',
              },
            },
          },
        ],
      },
      dishes: {
        _filter: {
          _and: [
            {
              status: {
                _eq: 'published',
              },
            },
            {
              prices: {
                id: {
                  _nnull: 'true',
                },
              },
            },
          ],
        },
        prices: {
          _sort: 'date_created',
        },
      },
    },
  })

  const {
    data: { data: restaurant },
  } = await http.get(
    `/items/restaurants?fields=${fields}&filter=${filter}&deep=${deep}&limit=1`
  )

  return {
    props: {
      restaurant: restaurant[0],
    },
  }
}
