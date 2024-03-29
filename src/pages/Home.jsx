import SlidesShow from '../components/SlidesShow'
import ProductsContainer from '../containers/ProductsContainer'

export default function Home () {
  return (
    <section className='section'>
      <SlidesShow />
      <article className='home-products'>
        <ProductsContainer />
      </article>
    </section>
  )
}
