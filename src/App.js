import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/calculator" element={<App />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
    {/* <Calculator /> */}
  </>
);

export default App;
