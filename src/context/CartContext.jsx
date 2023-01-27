import { createContext, useState } from 'react'

export const CartContext = createContext({})

const { Provider } = CartContext

export default function MyProvider ({ children }) {
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = window.localStorage.getItem('cart')
    if (cartLocalStorage) return JSON.parse(cartLocalStorage)
    return []
  })

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity }

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((item) => item.id === newItem.id)
      const productIndex = cart.indexOf(findProduct)
      const auxArray = [...cart]
      auxArray[productIndex].quantity += quantity
      setCart(auxArray)
      window.localStorage.setItem('cart', JSON.stringify(auxArray))
    } else {
      setCart([...cart, newItem])
      window.localStorage.setItem('cart', JSON.stringify([...cart, newItem]))
    }
  }

  const clear = () => {
    setCart([])
    window.localStorage.removeItem('cart')
  }

  const deleteItem = (id) => {
    const itemToRemove = cart.filter((e) => e.id !== id)
    window.localStorage.setItem('cart', JSON.stringify(itemToRemove))
    return setCart(itemToRemove)
  }

  const getItemQty = () => {
    return cart.reduce((acc, e) => (acc += e.quantity), 0)
  }

  const getItemPrice = () => {
    return cart.reduce((acc, e) => (acc += e.quantity * e.price), 0)
  }

  return (
    <Provider
      value={{
        cart,
        isInCart,
        addItem,
        clear,
        deleteItem,
        getItemQty,
        getItemPrice
      }}
    >
      {children}
    </Provider>
  )
}
