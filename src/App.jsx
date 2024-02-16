import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailTemplate from './pages/email';
import Acceptances from './pages/acceptance';
import Rejections from './pages/rejection';
import Schedule from './pages/schedule';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EmailTemplate />} />
      <Route path='/acceptance' element={<Acceptances />} />
      <Route path='/rejection' element={<Rejections />} />
      <Route path='/schedules' element={<Schedule />} />
    </Routes>
  );
};

export default App;
