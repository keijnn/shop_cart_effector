import React  from 'react'
import { $products } from 'features/shops'
import { getProduct } from 'features/orders'
import { useStore } from 'effector-react'


export const Products = () => {
  const products = useStore($products)
  const productsList = products.map((product) => {
    product.count = 1
    return (
      <div
        key={product.id}
        className="rounded-md py-2 h-26 border-2 border-stone-300 flex flex-col text-center items-center "
      >
        <p>{product.name}</p>
        <p>Price: {product.price}$</p>
        <button className="rounded-md w-36 m-1 bg-stone-300" onClick={() => getProduct(product)}>
          Add to cart
        </button>
      </div>
    )
  })

  return (
    <div className="w-full flex  ml-7 rounded-md overflow-auto border-2 border-stone-300">
      <ul className="p-5 grid grid-cols-2 gap-4 md:grid-cols-1">{productsList}</ul>
    </div>
  )
}
