import style from "../styles/Formulario.module.css";

const Categorias = ({ categoria }) => {
  const { id, Nombre } = categoria;
  return (
    <option key={id} value={id} >
      {Nombre}
    </option>
  );
};

export default Categorias;
