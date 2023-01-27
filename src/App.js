import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import MyProvider from './context/CartContext'
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error404 from './components/Error404'
import WhatsAppBtn from './components/WhatsAppBtn'
import ProductDetail from './containers/ProductDetail'
import './styles/styles.css'

export function App () {
  return (
    <main className='main-container'>
      <Router>
        <MyProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Products />} />
            <Route path='/productos/:id' element={<ProductDetail />} />
            <Route path='/nosotros' element={<AboutUs />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
          <Footer
            phone='+543483490526'
            mail='contacto@mohanaindumentaria.com.ar'
            instagram='mohana.indum'
          />
          <WhatsAppBtn phone='543483490526' />
        </MyProvider>
      </Router>
    </main>
  )
}
