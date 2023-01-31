import { Link } from 'react-router-dom'

export default function ProductCard ({ product }) {
  const { img, id, name, price } = product
  return (
    <div className='product-card'>
      <Link to={`/productos/${id}`}>
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <h5>${price}</h5>
      </Link>
    </div>
  )
}
