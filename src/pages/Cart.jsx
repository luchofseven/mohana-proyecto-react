import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { toastNotify } from '../notify/toastNotify'

export default function Cart () {
  const { cart, clear, deleteItem, getItemQty, getItemPrice } =
    useContext(CartContext)

  function deleteProductById (id) {
    const confirm = window.confirm('¿Desea eliminar éste producto del carrito?')
    if (confirm) {
      deleteItem(id)
      toastNotify({ message: '¡Se eliminó el producto del carrito!' })
    }
  }

  function deleteAllProducts () {
    const confirm = window.confirm(
      '¿Desea eliminar todos los productos del carrito?'
    )
    if (confirm) {
      clear()
      toastNotify({ message: '¡Se vació correctamente el carrito!' })
    }
  }

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
        ? (
          <div className='section'>
            <div className='section-cart'>
              <div className='cart'>
                {cart.map((el) => (
                  <div className='cart-product' key={el.id}>
                    <img src={el.img} alt={el.name} />
                    <h3>{el.name}</h3>
                    <h4>Cantidad: {el.quantity}</h4>
                    <small>Talle: {el.selectSize}</small>
                    <small>Color: {el.selectColor}</small>
                    <button onClick={() => deleteProductById(el.id)}>
                      Eliminar producto
                    </button>
                  </div>
                ))}
              </div>
              <h4>
                Total de productos: <b>{getItemQty()}</b>
              </h4>
              <h4>
                TOTAL A PAGAR: <b>${getItemPrice()}</b>
              </h4>
              <button
                onClick={() => {
                  deleteAllProducts()
                }}
              >
                Vaciar carrito
              </button>
              <Link to='/checkout'>Ir a pagar</Link>
            </div>
          </div>
          )
        : (
          <div className='section'>
            <div className='section-empty-cart'>
              <h2>El carrito está vacío</h2>
              <Link to='/productos'>Ver productos</Link>
            </div>
          </div>
          )}
    </>
  )
}
