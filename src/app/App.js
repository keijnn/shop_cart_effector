import { Order } from 'pages/order/Order'
import { Routes, Route, Navigate} from 'react-router-dom'
import { Shop } from 'pages/shop/Shop'
import { Header } from 'components/header/Header'

export const App = () => {
  return (
    <div className="w-full h-full font-mono text-base">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="shop" />} />
        <Route path="shop" element={<Shop />} />
        <Route path="basket" element={<Order />} />
      </Routes>
    </div>
  )
}
