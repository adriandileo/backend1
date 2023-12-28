import { getunitem } from "./item";
import Contenedor from "./contenedor";
import React, {UseState,UseEffect} from "react";
import { useParams } from "react-router-dom";



export default function JustItem(){
    const [objeto , setObjeto] = UseState ([])
    const {id} = useParams()
    
      UseEffect(
        () => {
          getunitem(id)
          .then((objeto) => {
            setObjeto(objeto)
    })
        },[id]
      );
        return(
            <>
            <div>
                <div className="orden">
    
                <Contenedor
                        
                        key={objeto.id}
                        id={objeto.id} 
                        category={objeto.category} 
                        title={objeto.name} 
                        details={objeto.details} 
                        precio={objeto.precio}  
        
                />  
                </div>
            </div>
            </>
        )
    }
    
        