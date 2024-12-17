import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home';
import Admin from './components/Admin';
import Hotels from './components/Hotels';
import Feature from './components/Feature';
import Details from './components/Details';
import Booking from './components/Booking';
import FirstPage from './components/FirstPage';
import Footer from './components/Footer';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
      <Route path="/hotels/:placeId" element={<PrivateRoute><Hotels /></PrivateRoute>} />
      <Route path="/feature/:placeId" element={<PrivateRoute><Feature /></PrivateRoute>} />
      <Route path="/details/:hotelId" element={<PrivateRoute><Details /></PrivateRoute>} />
      <Route path="/booking" element={<PrivateRoute><Booking /></PrivateRoute>} />
      <Route path="/first" element={<PrivateRoute><FirstPage /></PrivateRoute>} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
