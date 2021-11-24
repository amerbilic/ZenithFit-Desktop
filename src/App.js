import { Routes , useLocation, Route } from 'react-router-dom'
import Index from './components/pages/index'
import ProductsPage from './components/pages/products'
import UsersPage from './components/pages/users'
import OrdersPage from './components/pages/orders'
import OrderDetailsPage from './components/pages/orderDetails'
import UserListPage from './components/pages/userList'
import ProductListPage from './components/pages/productList'
import UserAddPage from './components/pages/userAdd'
import ProductAddPage from './components/pages/productAdd'
import ProductEditPage from './components/pages/productEdit'

function App() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Index/>} />
      <Route exact path="/products" element={<ProductsPage/>} />
      <Route exact path="/users" element={<UsersPage/>} />
      <Route exact path="/orders" element={<OrdersPage/>} />
      <Route  path="/orderDetails" element={<OrderDetailsPage/>} />
      <Route  path="/userList" element={<UserListPage/>} />
      <Route  path="/productList" element={<ProductListPage/>} />
      <Route  path="/userAdd" element={<UserAddPage/>} />
      <Route  path="/productAdd" element={<ProductAddPage/>} />
      <Route  path="/productEdit" element={<ProductEditPage/>} />
    </Routes>
  )
}

export default App
