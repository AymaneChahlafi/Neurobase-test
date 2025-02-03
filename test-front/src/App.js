import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import EditProductPage from './pages/EditProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
          <Route path="/create" element={<EditProductPage />} />
        </Routes>
      </Router>
  );
};

export default App;
