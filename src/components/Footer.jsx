import { useFilters } from '../hooks/useFilters'
// import { useCart } from '../hooks/useCart'
import './Footer.css'

const Footer = () => {
  const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️</h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <h5>Filters: {JSON.stringify(filters, null, 2)}</h5>
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  )
}

export default Footer
