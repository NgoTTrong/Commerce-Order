import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import { useRef } from 'react'
import axios from 'axios'
export default function Gallery({ products }) {
  let coffeeRef = useRef()

  const scrollHandler = (e) => {
    e.preventDefault()
    coffeeRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={(element) => (coffeeRef = element)}
            >
              Crafted by us, for you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  let products = await axios.get(
    process.env.NEXT_PUBLIC_SERVER_URL + '/product'
  )
  return {
    props: {
      products: products.data,
    },
  }
}
