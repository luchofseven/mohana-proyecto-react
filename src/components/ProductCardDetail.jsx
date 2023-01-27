import ItemCount from './ItemCount'

export default function ProductCardDetail ({ product }) {
  const { img, name, price, stock, size, color } = product
  const sizes = size.map((size, index) => (
    <option key={index} value={size}>
      {size}
    </option>
  ))
  const colors = color.map((color, index) => (
    <option key={index} value={color}>
      {color}
    </option>
  ))
  return (
    <div className='product-card-detail'>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <h4>Stock: {stock}</h4>
      <p>Talle:</p>
      <select>
        {sizes}
      </select>
      {color[0] === ''
        ? (
            ''
          )
        : (
          <div>
            <p>Color:</p>
            <select>
              {colors}
            </select>
          </div>
          )}
      <ItemCount product={product} />
    </div>
  )
}
