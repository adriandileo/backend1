import { Link } from "react-router-dom";
import React from "react";

export default function NavBar(){
    return <nav>
        <div>
            <img src="" alt="" />
            <Link to={"/"}>Coder</Link>
        </div>
        <ul>
            <li><Link  to={"/category/item1"}>item1</Link></li>
            <li><Link to={"/category/item2"}>item2</Link></li>
        </ul>
    </nav>
    
}
