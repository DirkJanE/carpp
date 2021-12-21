import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginSignup,
    Maps

} from './pages';
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginSignup/>}/>
          </Routes>
          <Routes>
              <Route path="/maps" element={<Maps/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
