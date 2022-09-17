import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/calculator" element={<App />} /> */}
      <Route path="/quote" element={<Quote />} />
      <Route path="/home" render={() => <Navigate to="/" />} />
    </Routes>
    {/* <Calculator /> */}
  </>
);

export default App;
