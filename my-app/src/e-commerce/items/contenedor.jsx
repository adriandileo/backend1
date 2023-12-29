import { Link } from "react-router-dom";

//      CONTENEDOR

export function Contenedor(props){


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
            <button>{`Mas informacion ${props.title} `} </button>
            </Link> 
            
        </div>
    </div>
    )

}

export function Oneconteiner(objeto){
    return(
        <div>
            <h1>{objeto.name} </h1>
            <p>{objeto.details} </p>
            <h4>${objeto.precio} </h4>
                    
        </div>
    )
}