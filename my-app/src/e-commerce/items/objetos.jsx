import React, {useState,useEffect} from "react";
import { getitems,getCategory } from "./item";
import Contenedor from "./contenedor";
import { useParams } from "react-router-dom";


export function Objetos(){
    const [items , setItems] = useState ([])
    useEffect(
      () => {
        getitems()
        .then((items) => {
        setItems(items)
})
},[]);

    
    return(
    <> 
    <div >
                {items.map((items)=> {
                  
                    return(
                <div className="orden" key={items.id}>
                <Contenedor id={items.id} category={items.category} title={items.name} details ={items.details} precio={items.precio}  />
                </div>
                    )})}
    </div>
    </>)
  
}
export function CategoryObj(){
    const [categoria , setCategory ] = useState([])
    const {category} = useParams()
    useEffect(
        () => {
          getCategory(category)
          .then((categoria) => {
            setCategory(categoria)
    })
        },[category]
      );
    
    
        return (
            <div>
                <div>
                    {categoria.map((categoria)=>{
                        return(
                            <Contenedor
    
                            key={categoria.id}
                            id={categoria.id} 
                            category={categoria.category} 
                            title={categoria.name} 
                            details={categoria.details} 
                            precio={categoria.precio}  
                            
                            />
                        )} )}
                    
                </div>
            </div>
        )
    }
