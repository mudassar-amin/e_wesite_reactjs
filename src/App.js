
import './App.css';  // Import Tailwind CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Navbar from './components/Navbar';  // Import Navbar


function App() {
  return (

    
    <Router>
      
      <div>
        {/* Navbar will be displayed on all pages */}
        <Navbar />
        
        {/* Define the routes for your pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
