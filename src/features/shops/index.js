import { createStore, createEvent, createEffect } from 'effector'


export const checkedProducts = createEvent()

export const $shops = createStore([])
export const $products = createStore([]).on(checkedProducts, (_, list) => list)

const getShopsFx = createEffect(async () => {
  const response = await fetch('https://62cfc9801cc14f8c087d4fc1.mockapi.io/delivery/shops')
  if (!response.ok) throw response

  return response.json()
})

getShopsFx()

$shops.on(getShopsFx.doneData, (_, data) => data)


