import react, { useEffect, useState } from 'react'
import { getProducts } from './services/api'
import './App.css'
import ProductsContextProvider from './context/ProductsContextProvider'
import Stor from './components/Stor'
import ProductDetails from './components/ProductDetails'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  function Redirect({ to }) {
    console.log(to)
    let navigate = useNavigate()
    useEffect(() => {
      navigate(to)
    })
    return null
  }
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product" element={<Stor />} />
        <Route path="*" element={<Redirect to="/product" />} />
      </Routes>
    </ProductsContextProvider>
  )
}

export default App
