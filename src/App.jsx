import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailTemplate from './pages/email';
import Acceptance from './pages/acceptance';
import Rejections from './pages/rejection';
import Schedule from './pages/schedule';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EmailTemplate />} />
      <Route path='/acceptance' element={<Acceptance />} />
      <Route path='/rejection' element={<Rejections />} />
      <Route path='/schedule' element={<Schedule />} />
    </Routes>
  );
};

export default App;
