import { Link } from 'react-router-dom'

export default function EmptyCart () {
  return (
    <div className='section'>
      <div className='section-empty-cart'>
        <h2>El carrito está vacío</h2>
        <Link to='/productos'>Ver productos</Link>
      </div>
    </div>
  )
}
