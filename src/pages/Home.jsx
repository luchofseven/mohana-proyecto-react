import SlidesShow from '../components/SlidesShow'
import ProductsContainer from '../containers/ProductsContainer'

export default function Home () {
  return (
    <section className='section'>
      <SlidesShow />
      <article className='home-products'>
        <h3>Nuestros productos 🥰</h3>
        <ProductsContainer />
      </article>
    </section>
  )
}
