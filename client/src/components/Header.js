<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
//import Home from './Home';
import './Header.css';


const Header = () => {
    //whenever app reloaded, will load homepage
    const[activeTab, setActiveTab] = useState("Home");
    
    //if there is a change in location
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/" ) {
            setActiveTab("Home")
        }
        else if(location.pathname === "/addItem")
        {
            setActiveTab("AddItem")
        }
        else if(location.pathname === "/about")
               { 
                    setActiveTab("About") 
                }
    },[location])
    return(
        <div className=' header'>
            <p className='logo'>
                FreeCycle(1.0)
            </p>
            <div className='header-center'>

                <Link to="">
                    <p className={`${activeTab === "Home" ? "active": ""}`}
                    onClick={()=> setActiveTab("Home")}
                    >Home</p>
                </Link>
                
                <Link to="/addItem">
                    <p className={`${activeTab === "AddItem" ? "active": ""}`}
                    onClick={()=> setActiveTab("AddItem")}
                    >Add Item</p>
                </Link>

                <Link to="About">
                    <p className={`${activeTab === "About" ? "active": ""}`}
                    onClick={()=> setActiveTab("About")}
                    >About</p>
                </Link>

            </div>
        </div>
    )
};

export default Header;
=======
import React from 'react';
import Progress from './Progress';

const Header = () => (
  <div>
    <h1>FreeCycle</h1>
    <Progress/>
  </div>
);

export default Header;
>>>>>>> 5cbe577c1edc9e7563be3459bff27a06b62cac9b
