import './App.css'
import React, { useEffect } from 'react'

// Components
import Store from './components/Store'
import ProductDetails from './components/ProductDetails'

// Context
import ProductContextProvider from './context/ProductContextProvider'
import CartContextProvider from './context/CartContextProvider'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const Redirect = ({ to }) => {
    let navigate = useNavigate()
    useEffect(() => {
      navigate(to)
    })
    return null
  }
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Redirect to="/product" />} />
          <Route path="/product" element={<Store />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App
