import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Cart () {
  const { cart, clear, deleteItem, getItemQty, getItemPrice } =
    useContext(CartContext)

  function deleteProductById (id) {
    const confirm = window.confirm('¿Desea eliminar éste producto del carrito?') // MEJORAR NOTIFICACION
    if (confirm) deleteItem(id)
  }

  function deleteAllProducts () {
    const confirm = window.confirm(
      '¿Desea eliminar todos los productos del carrito?'
    ) // MEJORAR NOTIFICACION
    if (confirm) clear()
  }

  return (
    <>
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
