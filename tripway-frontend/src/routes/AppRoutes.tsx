import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from '../components/layout/AppLayout';

import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import HomePage from '../features/home/pages/HomePage';
import Hotels from '../features/hotels/pages/Hotels';
import HotelDetails from '../features/hotels/pages/HotelDetails';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/hotels" element={<Hotels />} />

          <Route
            path="/hotels/:id"
            element={<HotelDetails />}
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;