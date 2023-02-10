import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ToastContainer } from 'react-toastify'
import ProductsInCart from '../components/ProducstInCart'
import EmptyCart from '../components/EmptyCart'

export default function Cart () {
  const { cart } = useContext(CartContext)

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='colored'
      />
      {cart.length > 0
        ? <ProductsInCart />
        : <EmptyCart />}
    </>
  )
}
