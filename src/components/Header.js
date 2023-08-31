import { useEffect, useState } from "react";
import logo from "../Assets/foodlogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../useOnlineStatus";


const Title = () => (
    <img className="w-20 h-20" 
       alt="Food-logo"
       src={logo}
    />
);

const Header = () => {
   const[isLoggedIn , setLoggedIn] = useState(false);

   const OnlineStatus = useOnlineStatus();

    useEffect(() => {

    } , [])
       
    return(
        <div className="flex justify-between bg-white shadow-lg items-center ">
            <Title/>
            
            <div className="nav-items flex items-center">
               

                <ul className="flex gap-4 ">
                    <li className="px-4">
                        Online Status : {OnlineStatus ? "✅" : "❌" }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                
                    <li>
                       <i className="fa-solid fa-cart-shopping"></i>
                    </li>
                    
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={() => setLoggedIn(false)}>Logout</button>
            
            ) : (
              <button onClick={() => setLoggedIn(true)}>Login</button> 
            )
        }
            
        </div>
    )
};
export default Header;