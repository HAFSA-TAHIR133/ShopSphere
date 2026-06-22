import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Changed Router to BrowserRouter
import { useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import ProtectedRoute from "../components/protectedRouteComponet";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function AppRoutes() {
  const location = useLocation();
  
  // Hide the Navbar and Footer completely on the Login page ('/')
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Navbar />}

      <main className="main-content-wrapper">
        <Routes>
          <Route path='/' element={<Login />} />
          
          <Route path='/home' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          
          <Route path='/cart' element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </>
  );
}


export default AppRoutes;