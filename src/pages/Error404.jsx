import { Link } from 'react-router-dom'

export default function Error404 () {
  return (
    <div className='section'>
      <article className='error-404'>
        <h2>
          Error 404 <br />
          Page Not Found
        </h2>
        <Link to='/'>Volver al inicio</Link>
        <Link to='/productos'>¡Conocé nuestros productos!</Link>
      </article>
    </div>
  )
}
