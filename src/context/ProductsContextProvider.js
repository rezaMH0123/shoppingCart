import React from 'react'
import react, { useEffect, useState, createContext } from 'react'
import { getProducts } from '../services/api'
export const productContext = createContext()
const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getProducts()
      setProducts(res)
    }
    fetchApi()
  }, [])

  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  )
}

export default ProductsContextProvider
