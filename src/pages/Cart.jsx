import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ProductsInCart from '../components/ProducstInCart'
import EmptyCart from '../components/EmptyCart'

export default function Cart () {
  const { cart } = useContext(CartContext)

  return (
    <>
      {cart.length > 0
        ? <ProductsInCart />
        : <EmptyCart />}
    </>
  )
}
