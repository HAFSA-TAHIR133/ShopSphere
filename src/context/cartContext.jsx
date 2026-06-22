import { useContext,createContext ,useState} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [cartCount,setCartCount] = useState([]);

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
    

    // cart total price added of same item clicked

    const handleViewBtn = (product) => {
        alert(`${product.name} added to cart!`);

        setCartCount(prev => {
            const existing = prev.find(
                cartItem => cartItem.id === product.id
            );

            if (existing) {
                return prev.map(cartItem =>
                    cartItem.id === product.id
                        ? {
                              ...cartItem,
                              quantity: cartItem.quantity + 1
                          }
                        : cartItem
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };

    return (
        <CartContext.Provider value={{cartCount,increaseQuantity,decreaseQuantity,handleViewBtn}} >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = ()=>{
    return useContext(CartContext);
};
