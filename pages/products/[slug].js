import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Product({ product }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          {
            product.thumbnailurl &&           
            <Image
            alt="coffee"
            className="rounded-lg"
            src={product.thumbnailurl}
            width={560}
            height={640}
            objectFit="cover"
          />
          }
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.name}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              ${product.baseprice} - ({Math.round((product.baseprice - product.discountprice)/product.baseprice*100)} %)
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              ${product.discountprice}
            </h1>
            <button
              className="mt-5 rounded-md border border-transparent bg-orange-600 px-4 py-3 font-medium text-white shadow-sm hover:bg-orange-400 sm:px-8"
              onClick={() => checkout(product.id)}
            >
              Checkout
            </button>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const product = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL+"/product/"+params.slug);
  return {
    props: {
      product: product.data,
    },
  }
}

export async function getStaticPaths() {
  const products = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL+"/product");
  let fullPaths = []
  for (let product of products.data) {
    fullPaths.push({ params: { slug: product.id.toString() } })
  }

  return {
    paths: fullPaths,
    fallback: 'blocking',
  }
}
