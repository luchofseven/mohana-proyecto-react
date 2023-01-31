import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

export default function ProductCardDetail ({ product }) {
  const { img, name, price, stock, size, color } = product

  const sizes = size.map((size, index) => (
    <option key={index} value={size}>
      {size}
    </option>
  ))
  const initialSize = sizes[0].props.value
  const [selectSize, setSelectSize] = useState(initialSize)

  const colors = color.map((color, index) => (
    <option key={index} value={color}>
      {color}
    </option>
  ))
  const initialColor = colors[0].props.value
  const [selectColor, setSelectColor] = useState(initialColor)

  function handleSelectSize (e) {
    setSelectSize(e.target.value)
  }

  function handleSelectColor (e) {
    setSelectColor(e.target.value)
  }

  const newProduct = { ...product, selectSize, selectColor }

  return (
    <div className='product-card-detail'>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <h4>Stock: {stock}</h4>
      <p>Talle:</p>
      <select value={selectSize} onChange={handleSelectSize}>
        {sizes}
      </select>
      {color[0] === ''
        ? (
            ''
          )
        : (
          <div>
            <p>Color:</p>
            <select value={selectColor} onChange={handleSelectColor}>
              {colors}
            </select>
          </div>
          )}
      <ItemCount product={newProduct} />
      <Link to='/cart'>Ver carrito</Link>
    </div>
  )
}
