import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const ProductosContext = createContext()
const ProductosProvider = ({ children }) => {
  const [productos,setProductos] = useState([]);

  const consultarProductos = async datos =>{
    
    try{
      
      if(datos.length === 0){
        setProductos("")
      }else{
      const url = `http://localhost:1337/productos?categorias=${datos}`;
      const {data} = await axios(url);
     var dataOrdenada = data.sort((a,b) => {
        return  b.precio - a.precio ;
      })
      console.log(dataOrdenada)
      setProductos(dataOrdenada)
      
      }
      
    }catch(error){
      console.log(error)
    }
  }

  const busquedaProductos = (search) =>{
    const {busqueda} = search;
    
  } 

  return (
    <ProductosContext.Provider
        value={{
          consultarProductos,
          productos,
          busquedaProductos
        }}>     
        {children}
    </ProductosContext.Provider>
  )
};

export { ProductosProvider };

export default ProductosContext;


