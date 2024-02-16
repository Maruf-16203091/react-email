import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailTemplate from './pages/email';
import EmailTemplate1 from './pages/acceptance';
import EmailTemplate2 from './pages/rejection';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EmailTemplate />} />
      <Route path='/acceptance' element={<EmailTemplate1 />} />
      <Route path='/rejection' element={<EmailTemplate2 />} />
    </Routes>
  );
};

export default App;
