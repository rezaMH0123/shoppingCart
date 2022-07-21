import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productContext } from '../context/ProductsContextProvider'
const ProductDetails = () => {
  let { id } = useParams()
  const products = useContext(productContext)
  console.log(products[id - 1])

  return <div>ProductDetails</div>
}

export default ProductDetails
