import styles from "../styles/Formulario.module.css";
import useCategoria from "../hooks/useCategoria";
import useProductos from "../hooks/useProductos";
import Categorias from "./Categorias";
import { useState } from "react";
import Ordenado from './Ordenado';

const Formulario = ({}) => {
 
  const { categorias,handleClickCategoria } = useCategoria();
  const {consultarProductos} = useProductos();

  const [search,setSearch] = useState({
    categoria:''
  })
  
  const handleSubmit = e =>{
    e.preventDefault()
    consultarProductos(search.categoria)
  }

  return (
    <>
    <form 
      className={styles.flexForm}
      onSubmit={handleSubmit}>
      <label htmlFor="categoria">Nombre Categoria</label>
      <select
        className={styles.select}
        value={search.categoria}
        id="categoria"
        name="categoria"
        onChange={(e) =>
          setSearch({ ...search, [e.target.name]: e.target.value })
        }
      >
        <option value="">- Seleccione Categoria -</option>
        {categorias.map((categoria) => (
          <Categorias
            key={categoria.id}
            value={categoria.id}
            categoria={categoria}
          />
        ))}
      </select>
      <button
        type="submit"
        value="Search"
        onClick={() => handleClickCategoria(search.categoria)}
      >
        Search
      </button>
    </form>

    <Ordenado/>
    </>
  );
};

export default Formulario;
