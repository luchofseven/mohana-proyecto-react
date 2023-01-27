import { Link } from 'react-router-dom'

export default function ProductCard ({ product }) {
  const { img, id, name, price } = product
  return (
    <div className='product-card'>
      <Link to={`/productos/${id}`}>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <h4>${price}</h4>
      </Link>
    </div>
  )
}
