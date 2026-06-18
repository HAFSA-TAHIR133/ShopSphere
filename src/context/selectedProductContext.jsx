
import { useContext,createContext ,useState} from "react";

export const SelectedProductContext = createContext();

export const SelectedProductProvider = ({children})=>{
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <SelectedProductContext.Provider value={{selectedProduct,setSelectedProduct}} >
            {children}
        </SelectedProductContext.Provider>
    );
};

export const useSelectedProductContext = ()=>{
    return useContext(SelectedProductContext);
};
