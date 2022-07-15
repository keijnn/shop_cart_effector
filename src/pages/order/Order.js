import { Basket } from 'components/basket/Basket'
import { Form } from 'components/form/Form'
import React from 'react'

export const Order = () => {
  return (
    <div className="flex p-5">
      <Form />
      <Basket />
    </div>
  )
}
