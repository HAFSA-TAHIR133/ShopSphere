
import { useContext,createContext ,useState} from "react";
import { useNavigate } from "react-router-dom";

export const SelectedProductContext = createContext();

export const SelectedProductProvider = ({children})=>{
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const handleViewDetails=(value)=>{
        setSelectedProduct(value);
    }

    const handleProductCardBack=()=>{
        setSelectedProduct(null);
            navigate('/home');
    }

    return (
        <SelectedProductContext.Provider value={{selectedProduct,handleViewDetails,handleProductCardBack}} >
            {children}
        </SelectedProductContext.Provider>
    );
};

export const useSelectedProductContext = ()=>{
    return useContext(SelectedProductContext);
};
