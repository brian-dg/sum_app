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
      setProductos(data)
      
      }
      
    }catch(error){
      console.log(error)
    }
  }

  return (
    <ProductosContext.Provider
        value={{
          consultarProductos,
          productos
        }}>     
        {children}
    </ProductosContext.Provider>
  )
};

export { ProductosProvider };

export default ProductosContext;


