import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Nav from './Nav';
import OrderSummary from './OrderSummary';
import NoMatch from './NoMatch';
import Product from './Product';
import FeaturedProducts from './FeaturedProducts';
import NewProducts from './NewProducts';
import Users from './Users';
import UserDetails from './UserDetails';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<OrderSummary />} />
        <Route path="/products" element={<Product />} > 
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} />
        <Route path='users/:userId' element={<UserDetails />} />
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </>
  );
}

export default App;