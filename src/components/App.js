import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
