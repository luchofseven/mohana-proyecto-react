import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { toast, Toaster } from 'react-hot-toast'

export default function ItemCount ({ product }) {
  const { stock } = product
  const { addItem } = useContext(CartContext)
  const [count, setCount] = useState(1)
  const [stockAvailable, setStockAvailable] = useState(stock - 1)

  function handleChangeAdd () {
    if (count >= 0 && stockAvailable > 0) {
      setCount(count + 1)
      setStockAvailable(stockAvailable - 1)
    }
  }

  function handleChangeSubtract () {
    if (count > 0 && stockAvailable >= 0) {
      setCount(count - 1)
      setStockAvailable(stockAvailable + 1)
    }
  }

  function addToCart () {
    if (count !== 0) {
      if (stockAvailable !== 0 || count > 0) {
        addItem(product, count)
        toast.success(`¡Agregaste ${count} ${product.name} al carrito!`)
        setCount(1)
      }
    } else {
      toast.error('¡No puedes agregar 0 productos!')
    }
  }

  return (
    <div className='item-count'>
      <Toaster />
      <h3>{count}</h3>
      <small>Disponible: {stockAvailable} unidades</small>
      <button onClick={handleChangeSubtract}>-</button>
      <button onClick={addToCart}>Agregar al carrito</button>
      <button onClick={handleChangeAdd}> +</button>
    </div>
  )
}
