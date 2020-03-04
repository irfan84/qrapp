import React from "react";
import Logo from './Logo/logo.png'
const Navigation  = () => {
    return (
        <nav className="navbar" style={{background: "#880e4f"}}>
            <div className='container'>
                <img src={Logo} alt="Logo" width="20%"/>
            <p className='f5 dim white center mt2'>
                    Pakistan Museum of Natural History
            </p>
        </div>
        </nav>
    )
}

export default Navigation;

