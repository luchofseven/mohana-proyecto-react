import { useState, useEffect } from 'react'
import { getProducts } from '../services/getData'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

export default function ProductsContainer () {
  const [products, setProducts] = useState([])
  const [productsError, setProductsError] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then(res => {
        const response = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setProducts(response)
        setLoading(false)
      })
      .catch(err => {
        if (err) setProductsError({ error: `Ocurrió un error: ${err}` })
        setLoading(false)
      })
  }, [])

  return (
    <section className='products-container'>
      {loading ? <Loader /> : ''}
      {products.length > 0 ? products.map(product => <ProductCard key={product.id} product={product} />) : ''}
      <div style={{ textAlign: 'center' }}>
        {productsError !== {} ? <h4>{productsError.error}</h4> : ''}
      </div>
    </section>
  )
}
