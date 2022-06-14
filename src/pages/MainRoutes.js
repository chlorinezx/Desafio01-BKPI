import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './Main';
import { Description } from './Description';
import { Settings } from './Settings';

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/description/:id' element={<Description />} />
    </Routes>
  );
}