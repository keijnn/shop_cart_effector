import React from 'react'
import { FormField } from './Field'

export const Form = () => {
  return (
    <div className="w-7/12 rounded-md border-2 border-stone-300">
      <div className="max-h-full overflow-auto flex flex-col text-center p-5">
        <h2 className="h-10 border-b-2 border-stone-200">Delivery Form:</h2>
        <div>
          <FormField />
        </div>
      </div>
    </div>
  )
}
