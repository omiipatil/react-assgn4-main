import React from 'react';
import {Link} from "react-router-dom";


const Header=()=>{

    return (
<div className="header">

    <p><Link to="/home" className="list" >Home</Link></p>
    <p><Link to="/Appoiment"  className="list" >Appoiment</Link></p>
    <p><Link to="/contact"  className="list" >Contact Us</Link></p>


</div>
    )
}

export default Header;