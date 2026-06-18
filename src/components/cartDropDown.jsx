import { useCartContext } from '../context/cartContext.jsx';
import { useEffect,useState } from 'react';
import '../css/DropDown.css'

function CartDropDown({variant}) {
    const { cartCount, setCartCount } = useCartContext();

    const increaseQuantity = (id) => {
        setCartCount(prev =>
            prev.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
        );
        };


    const decreaseQuantity = (id) => {
        setCartCount(prev =>
            prev.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ).filter(item => item.quantity > 0)
        );
        };



    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = cartCount.reduce((sum, value) => sum + parseFloat(value.price) * parseFloat(value.quantity), 0);
        setTotalPrice(total.toFixed(2));
    }, [cartCount]);

    const isFullPage = variant ==="page";
    return (
        <>
        <div className={isFullPage?'cart-page-container':'cart-container'}>
            <div className={isFullPage?'full-page-drop-down-cart-items':''}>
            <h3 className='cart-items-h3'>Cart Items</h3>
            
            {cartCount.map((value,index) => (
                
                <div className={isFullPage?'full-page-cart-items-separate':'drop-down-cart-items'} key={value.id}>
                    <h3>Item: {index + 1}</h3> 
                    <span>{value.name}:</span>
                    <span> ${value.price}</span>
                    <p>Quantity: {value.quantity}</p>

                  <div className='quantity-btns'> 
                    <button onClick={()=> {increaseQuantity(value.id)}}>+</button>
                    <button onClick={()=> {decreaseQuantity(value.id)}}>-</button>
                </div> 

                </div>
                
            ))}
            
            <span>Total Price: ${totalPrice}</span>
            </div>
        </div>
        </>
    );
}

export default CartDropDown;