import { Link } from "react-router-dom";

//      CONTENEDOR

export default function Contenedor(props){


    return(
    
    <div className="card">
        <div>
            <img className="cardImage" src="" alt="" />
        </div>
        <div className="detalles">
            <h2>{props.title}</h2>
            <p>{props.details}</p>
            <h4>{props.precio} </h4>
            <Link to={`/category/${props.category}/${props.id}`}>
            </Link>
            
        </div>
    </div>
    )

}