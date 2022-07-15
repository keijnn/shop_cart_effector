import React, { useState } from 'react'
import { useStore } from 'effector-react'
import { $shops, checkedProducts } from 'features/shops'

export const Shops = () => {
  const shops = useStore($shops)

  const [buttonStatus, setButtonStatus] = useState()

  const activedStyle = 'p-4 mt-6 h-14 text-center rounded-md cursor-pointer bg-stone-200'
  const disabledStyle = 'p-4 mt-6 h-14 text-center rounded-md cursor-pointer border-2 border-stone-200'

  const shopsList = shops.map((shop) => {
    return (
      <li
        key={shop.id}
        className={shop.id === buttonStatus ? activedStyle : disabledStyle}
        onClick={() => {
          setButtonStatus(shop.id)
          checkedProducts(shop.products)
        }}
      >
        {shop.title}
      </li>
    )
  })

  return (
    <div className="w-4/12 md:w-8/12 rounded-md border-2 border-stone-300">
      <div className="max-h-full overflow-auto flex flex-col text-center p-5">
        <h2 className="h-10 border-b-2 border-stone-200">Shops</h2>
        <ul>{shopsList}</ul>
      </div>
    </div>
  )
}
