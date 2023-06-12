import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import CartProduct from './CartProduct'

export default function ProductsInCart () {
  const { cart, deleteItem, getItemQty, getItemPrice, clear } = useContext(CartContext)

  function deleteProductById (id) {
    const confirm = window.confirm('¿Desea eliminar éste producto del carrito?')
    if (confirm) {
      deleteItem(id)
    }
  }

  function deleteAllProducts () {
    const confirm = window.confirm(
      '¿Desea eliminar todos los productos del carrito?'
    )
    if (confirm) {
      clear()
    }
  }

  return (
    <div className='section'>
      <div className='section-cart'>
        <div className='cart'>
          {cart?.map(product => <CartProduct key={product.id} product={product} deleteProductById={deleteProductById} />)}
        </div>
        <h4>
          Total de productos: <b>{getItemQty()}</b>
        </h4>
        <h4>
          Total: <b>$ {getItemPrice()}.00</b>
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
}
