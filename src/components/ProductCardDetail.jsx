import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import Sizes from './Sizes'
import Colors from './Colors'

export default function ProductCardDetail ({ product }) {
  const { img, name, price, size, color } = product

  const [selectSize, setSelectSize] = useState(size[0])
  const [selectColor, setSelectColor] = useState(color[0])

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
      <div className='product-card-description'>
        <h3>{name}</h3>
        <h4>${price}</h4>
        <div className='product-card-description-sizes'>
          <Sizes sizes={size} handleSelectSize={handleSelectSize} />
        </div>
        <div className='product-card-description-colors'>
          <Colors colors={color} handleSelectColor={handleSelectColor} />
        </div>
      </div>
      <div className='product-card-description-cart'>
        <ItemCount product={newProduct} />
        <Link to='/cart'>Ver carrito</Link>
      </div>
    </div>
  )
}
