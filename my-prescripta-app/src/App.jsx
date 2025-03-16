import React from 'react';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PatientProfile from './pages/Patient';
import Pharmacy from './pages/Pharmacy';
import DoctorPage from './pages/Doctor';

const App = () => {
  return (
    <BrowserRouter>
      <nav className='mb-4 text-center'>
        <Link to="/" className="mr-4 text-blue-500">Home</Link>
        <Link to="/patient" className=" mr-4 text-blue-500">Patient Info</Link>
        <Link to="/pharmacist" className="mr-4 text-blue-500">Pharmacy</Link>
        <Link to="/doctor" className='text-blue-500'>Doctor</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/patient" element={<PatientProfile />} />
          <Route path="/pharmacist"  element={<Pharmacy />} />
          <Route path="/doctor" element={<DoctorPage />} />
      </Routes>
      {/* <div className='p-0'>
        <Home />
      </div> */}
      
    </BrowserRouter>
    
    
  )
}

export default App
