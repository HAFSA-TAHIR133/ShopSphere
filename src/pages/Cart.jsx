import CartDropDown from "../components/cartDropDown";
import { useNavigate } from "react-router-dom";
import '../css/DropDown.css';
function Cart(){
    const navigate =useNavigate();
    return(
    <>
    <div className="cart-page-container">
        <button onClick={()=> navigate(-1)}>Go Back</button>
        <CartDropDown variant="page"/>
    </div>
    </>
    );
}
export default Cart;