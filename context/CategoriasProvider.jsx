import { useState, useEffect, createContext } from 'react';
import axios from 'axios';


const CategoriaContext = createContext()

const CategoriaProvider = ({ children }) => {

  const [categorias,setCategorias] = useState([]);
 

  const obtenerCategoria =  async () => {
    try{
      const url = `http://localhost:1337/categorias`
      const {data} = await axios(url)    
      setCategorias(data)
      
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerCategoria()
  },[])

  const handleClickCategoria = id => {
   console.log("id")
  }
  return (
    <CategoriaContext.Provider
        value={{
          categorias,
          handleClickCategoria,
        }}>     
        {children}
    </CategoriaContext.Provider>
  )
};

export { CategoriaProvider };

export default CategoriaContext;


