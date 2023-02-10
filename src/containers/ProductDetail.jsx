import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../services/getData'
import ProductCardDetail from '../components/ProductCardDetail'
import Loader from '../components/Loader'

export default function ProductDetail () {
  const [product, setProduct] = useState(null)
  const [productError, setProductError] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    if (!id) return
    setLoading(true)
    getProduct(id)
      .then(res => {
        const response = { id: res.id, ...res.data() }
        setProduct(response)
        setLoading(false)
      })
      .catch(err => {
        if (err) setProductError({ error: `Ocurrió un error: ${err} ` })
        setLoading(false)
      })
  }, [id])

  return (
    <div className='product-detail'>
      {product !== null ? <ProductCardDetail product={product} /> : ''}
      {loading === true ? <Loader /> : ''}
      <div style={{ textAlign: 'center' }}>
        {productError !== {} ? <h4>{productError.error}</h4> : ''}
      </div>
    </div>
  )
}
