import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginSignup,
    Main

} from './pages';
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginSignup/>}/>
          </Routes>
          <Routes>
              <Route path="/main" element={<Main/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
