import { Routes, useLocation, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Fragment } from 'react'
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
import ReportsPage from './components/pages/reportsPage'
import Top10CustomersPage from './components/pages/reports/top10Customers'
import Top10ArticlesPage from './components/pages/reports/top10Articles'
import Top10RatedArticlesPage from './components/pages/reports/topRatedArticles'
import OrdersBetweenDatesPage from './components/pages/reports/ordersBetweenDates'
import LoginPage from './components/pages/loginPage'
import NavBar from './components/organisms/navBar'

function App() {
  const location = useLocation()
  return (
    <Fragment>
      <NavBar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<Index />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/orders" element={<OrdersPage />} />
          <Route exact path="/reports" element={<ReportsPage />} />
          <Route path="/orderDetails" element={<OrderDetailsPage />} />
          <Route path="/userList" element={<UserListPage />} />
          <Route path="/productList" element={<ProductListPage />} />
          <Route path="/userAdd" element={<UserAddPage />} />
          <Route path="/productAdd" element={<ProductAddPage />} />
          <Route path="/productEdit" element={<ProductEditPage />} />
          <Route path="/top10Customers" element={<Top10CustomersPage />} />
          <Route path="/top10Articles" element={<Top10ArticlesPage />} />
          <Route
            path="/top10RatedArticles"
            element={<Top10RatedArticlesPage />}
          />
          <Route
            path="/ordersBetweenDates"
            element={<OrdersBetweenDatesPage />}
          />
        </Routes>
      </AnimatePresence>
    </Fragment>
  )
}

export default App
