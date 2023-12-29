import { getunitem } from "./item";
import {Oneconteiner} from "./contenedor";
import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";



export default function JustItem(props){
    const [objeto , setObjeto] = useState ([])
    const {id} = useParams()
    
      useEffect(
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
    
                <Oneconteiner
                        
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
    
        