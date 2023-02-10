export default function CartProduct ({ product, deleteProductById }) {
  const { id, img, name, quantity, selectSize, selectColor } = product

  return (
    <div className='cart-product' key={id}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h4>Cantidad: {quantity}</h4>
      <small>Talle: {selectSize}</small>
      {selectColor !== '' ? <small>Color: {selectColor}</small> : ''}
      <button onClick={() => deleteProductById(id)}>
        Eliminar producto
      </button>
    </div>
  )
}
