import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductList from './pages/product/ProductList';
import ProductDetail from './pages/product/ProductDetail';
import ProductDetailOption from './pages/product/ProductDetailOption';
import ProductDetailDisable from './pages/product/ProductDetailDisable';


function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<ProductList />} />
          <Route path={'/ProductDetail'} element={<ProductDetail />} />
          <Route path={'/Productdetailoption'} element={<ProductDetailOption />} />
          <Route path={'/ProductDetailDisable'} element={<ProductDetailDisable />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;

