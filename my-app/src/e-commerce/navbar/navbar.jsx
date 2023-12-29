import { Link } from "react-router-dom";
import React from "react";

export default function NavBar(){
    return <nav>
        <div>
            <img src="" alt="" />
            <Link to={"/"}>Coder</Link>
        </div>
        <ul>
            <li><Link  to={"/category/cafe"}>cafe</Link></li>
            <li><Link to={"/category/salty"}>salty</Link></li>
        </ul>
    </nav>
    
}
