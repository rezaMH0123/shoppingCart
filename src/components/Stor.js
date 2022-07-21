import React, { useEffect, useContext } from 'react'
import { productContext } from '../context/ProductsContextProvider'
import Product from './Product'

const Stor = () => {
  const products = useContext(productContext)

  return (
    <div className="flex flex-wrap justify-around border-2 border-red-400">
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  )
}

export default Stor
