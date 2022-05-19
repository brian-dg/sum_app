import styles from "../styles/Formulario.module.css";
import {productos} from "../context/ProductosProvider";
import useProductos from "../hooks/useProductos";
import { useState } from "react";

const Ordenado = ({}) => {
    const orden = ["Mas Relevantes", "Menor Precio","Mayor Precio"];
    const {productos} = useProductos();
  return (
    <form 
      className={styles.flexForm}
 >
      <label htmlFor="categoria">Ordenar por: </label>
      <select
        className={styles.select}
        
        id="Ordenar"
        name="Odenar"
        
      >
        <option value="">- Mas Relevante -</option>
        {orden.map((ord) => (
           <>
           <option>
                {ord}
            </option>
           </>
        ))}
      </select>
    </form>
  );
};

export default Ordenado;
