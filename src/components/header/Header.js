import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="h-20 text-lg bg-[wheat]">
      <ul className="flex items-center font-semibold">
        <Link to="/shop" className="ml-10 w-10 h-5">
          Shop
        </Link>
        <p className="ml-10 h-4/6 w-1 border-r-2 border-black"></p>
        <Link to="/basket" className="ml-10 w-36 h-5 text-center">
          Shopping Cart
        </Link>
      </ul>
    </div>
  )
}
