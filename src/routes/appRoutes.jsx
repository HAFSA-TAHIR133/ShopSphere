import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import ProtectedRoute from "../components/protectedRouteComponet";

function AppRoutes(){
return(

    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={
            <ProtectedRoute >
                <Home />
            </ProtectedRoute>} />
        <Route path='/cart' element={
            <ProtectedRoute>
                <Cart />
            </ProtectedRoute>
            } />
    </Routes>
    );
}

export default AppRoutes;