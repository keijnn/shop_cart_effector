import { React, useState } from 'react'
import { $cart } from 'features/orders'
import { useStore } from 'effector-react'

export const Basket = () => {
  const basket = useStore($cart)

  const [count, setCount] = useState([])

  const basketList = basket.map((product) => {
      return (
        <div
          key={product.id}
          className="rounded-md p-4 h-48 border-2 border-stone-300 flex flex-col text-center items-center"
        >
          <p>{product.name}</p>
          <p>Total price: {product.count >= 0 ? product.count * product.price : 0}$</p>
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setCount(product.count * product.price)
                return product.count++
              }}
              className="rounded-md w-36 m-1 bg-stone-300"
            >
              Add
            </button>
            <p className="bg-[wheat] h-10 w-10 flex items-center justify-center">{product.count}</p>
            <button
              onClick={() => {
                setCount(product.count * product.price)
                return product.count >= 2 ? product.count-- : 1
              }}
              className="rounded-md w-36 m-1 bg-stone-300"
            >
              Reverse Add
            </button>
          </div>
        </div>
      )
  })
  

  return (
    <div className="w-full rounded-md p-5 flex flex-col ml-7 overflow-auto border-2 border-stone-300">
      <div className="sticky h-14 bg-stone-300 rounded-md top-0 inset-x-0 mx-auto flex p-4 w-9/12">
        <p>Amount: {count}</p>
        <button className="bg-stone-200 w-16">Submit</button>
      </div>
      <ul className="p-5 grid gap-4 grid-cols-1">{basketList}</ul>
    </div>
  )
}
