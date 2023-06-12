import { Link } from 'react-router-dom'

export default function ProductCard ({ product }) {
  const { img, id, name, price } = product

  const toId = `/productos/${id}`

  return (
    <div className='product-card'>
      <Link to={toId}>
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <h5>${price}</h5>
      </Link>
      <footer>
        <Link to={toId}>Ver más</Link>
      </footer>
    </div>
  )
}
