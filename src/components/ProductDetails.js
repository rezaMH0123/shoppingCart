import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

// Context
import { ProductsContext } from '../context/ProductContextProvider'

const ProductDetails = () => {
  let { id } = useParams()
  const data = useContext(ProductsContext)
  const product = data[id - 1]
  const { image, title, price, description, category } = product

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>Category:</span> {category}
        </p>
        <div>
          <span>{price} $</span>
          <Link to="/product">Back to Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
