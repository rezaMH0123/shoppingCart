import React from 'react'

// Functions
import { shortner } from '../helpers/textShortner'
import { Link } from 'react-router-dom'

const Product = ({ productData }) => {
  return (
    <div className="flex flex-col border-2 border-blue-600 w-[300px] mt-2 mb-2 cursor-pointer bg-gray-300 rounded-md">
      <img
        src={productData.image}
        alt="product"
        className="w-[200px]  h-[200px] self-center "
      />
      <h3>{shortner(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/product/${productData.id}`}>Details</Link>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add to cart
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
