import { useContext,createContext ,useState} from "react";

export const LoginContext = createContext({
    login:
    {admin:'Hafsa',
    email:'hn482134@gmail.com',
    password:'123'},
    setLogin:()=>{}
});

export const LoginContextProvider = ({children})=>{
    const [login,setLogin] = useState({
            admin:'Hafsa',
            email:'hn1234@gmail.com',
            password:'123'
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{login,setLogin,isLoggedIn, setIsLoggedIn}} >
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = ()=>{
    return useContext(LoginContext);
};
