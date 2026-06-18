import { useContext,createContext ,useState} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [cartCount,setCartCount] = useState([]);

    return (
        <CartContext.Provider value={{cartCount,setCartCount}} >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = ()=>{
    return useContext(CartContext);
};
