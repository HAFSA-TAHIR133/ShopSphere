import CartDropDown from "../components/cartDropDown";
import { useNavigate } from "react-router-dom";
import '../css/DropDown.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function Cart(){
    const navigate =useNavigate();
        
    return(
    <>
        <div className="home-layout">
            <div className="cart-page-container">
                <button onClick={()=> navigate(-1)}>Go Back</button>
                <CartDropDown variant="page"/>
            </div>

        </div>
    </>
    );
}
export default Cart;