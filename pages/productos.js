import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Formulario from "../components/Formulario";
import styles from "../styles/Formulario.module.css";
import {productos} from "../context/ProductosProvider";
import useProductos from "../hooks/useProductos";


const Productos = ({ productoStatic }) => {
  const {productos} = useProductos();
 
  return (
    <>
    
    <Layout pagina="Productos">
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion de Productos</h1>       
        <div>
          <div className={styles.contenedor}>
            <Formulario/>
          </div>
          {productos.length === 0 ? (<Listado productos={productoStatic} />) : (<Listado productos={productos} />) }
         
        </div>
      </main>
    </Layout>
    </>
  );
};


  { /* const url = `${process.env.API_URL}/productos`; */}
  
export async function getStaticProps() {
  const url = "http://localhost:1337/productos";
  const respuesta = await fetch(url);
  const productoStatic = await respuesta.json();

  return {
    props: {
      productoStatic,
    },
  };
}


export default Productos;
