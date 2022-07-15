import { Products } from 'components/products/Products'
import { Shops } from 'components/shops/Shops'
import React from 'react'

export const Shop = () => {
  return (
    <div className="flex p-5">
      <Shops />
      <Products />
    </div>
  )
}
