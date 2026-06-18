import { useState,useRef,useEffect } from "react";
import { useLoginContext } from "../context/LoginContext";
import { useNavigate ,Navigate} from "react-router-dom";
import '../App.css';

function Login(){
    const navigate = useNavigate();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const {login,setLogin, setIsLoggedIn}=useLoginContext();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(login.email === email && login.password === password){
            alert("Successfully LogIn!!!")
            setLogin(login);
            
            setIsLoggedIn(true);
            navigate('/home');
        }
        else{
            alert("Invalid Email or Password!!")
            return
        }
        setEmail("");
        setPassword("");
    }
    
    return(
        <>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter Your Email</label>
                    <input ref={inputRef} id="email" type="email" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <label htmlFor="password">Enter Your Password</label>
                    <input id="password" type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;