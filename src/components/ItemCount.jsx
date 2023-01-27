import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

export default function ItemCount ({ product }) {
  const { stock } = product
  const { addItem } = useContext(CartContext)
  const [count, setCount] = useState(1)
  const [stockAvailable, setStockAvailable] = useState(stock - 1)

  function handleChangeAdd () {
    if (count >= 1 && count < stock) {
      setCount(count + 1)
      setStockAvailable(stockAvailable - 1)
    }
  }

  function handleChangeSubtract () {
    if (count > 1 && count <= stock) {
      setCount(count - 1)
      setStockAvailable(stockAvailable + 1)
    }
  }

  function addToCart () {
    addItem(product, count)
    window.alert(`Agregaste ${count} ${product.name} al carrito`) // MEJORAR NOTIFICACION
  }

  return (
    <div className='item-count'>
      <h3>{count}</h3>
      <small>Disponible: {stockAvailable} unidades</small>
      <button onClick={handleChangeSubtract}>-</button>
      <button onClick={addToCart}>Agregar al carrito</button>
      <button onClick={handleChangeAdd}>+</button>
    </div>
  )
}
