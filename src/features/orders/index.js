import { createStore, createEvent } from 'effector'

export const getProduct = createEvent()

export const $cart = createStore([])
  .on(getProduct, (cart, product) => {
    const productCounter = cart.find((item) => item.id === product.id)
    if (productCounter) {
      product.count++
    } else return cart.concat(product)
  })
